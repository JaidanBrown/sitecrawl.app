interface GitHubCommit {
    sha: string
    commit: {
        message: string
        author: {
            name: string
            date: string
        }
    }
}

interface ParsedCommit {
    type: string
    scope?: string
    description: string
    date: string
    sha: string
}

interface ChangelogEntry {
    date: string
    type: string
    typeLabel: string
    changes: ParsedCommit[]
}

const COMMIT_TYPE_LABELS: Record<string, string> = {
    feat: 'New Features',
    fix: 'Bug Fixes',
    docs: 'Documentation',
    style: 'Styling',
    refactor: 'Refactoring',
    perf: 'Performance',
    test: 'Testing',
    chore: 'Maintenance',
    ci: 'CI/CD',
    build: 'Build',
}

const COMMIT_TYPE_ORDER = ['feat', 'fix', 'perf', 'refactor', 'docs', 'style', 'test', 'chore', 'ci', 'build']

function parseConventionalCommit(message: string): { type: string; scope?: string; description: string } | null {
    const match = message.match(/^(\w+)(?:\(([^)]+)\))?!?:\s*(.+)$/m)
    if (!match) return null
    
    const [, type, scope, description] = match
    return { type: type.toLowerCase(), scope, description }
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function getWeekKey(dateString: string): string {
    const date = new Date(dateString)
    const startOfWeek = new Date(date)
    startOfWeek.setDate(date.getDate() - date.getDay())
    return startOfWeek.toISOString().split('T')[0]
}

export async function fetchCommits(limit = 100): Promise<GitHubCommit[]> {
    const repo = 'JaidanBrown/dashboard.sitecrawl.app'
    const token = import.meta.env.GITHUB_TOKEN
    
    const headers: HeadersInit = {
        Accept: 'application/vnd.github.v3+json',
    }
    
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }
    
    const response = await fetch(
        `https://api.github.com/repos/${repo}/commits?per_page=${limit}`,
        { headers }
    )
    
    if (!response.ok) {
        console.error('Failed to fetch commits:', response.statusText)
        return []
    }
    
    return response.json()
}

export async function getChangelogEntries(): Promise<ChangelogEntry[]> {
    const commits = await fetchCommits()
    
    const parsedCommits: ParsedCommit[] = commits
        .map((commit) => {
            const parsed = parseConventionalCommit(commit.commit.message)
            if (!parsed) return null
            
            return {
                ...parsed,
                date: commit.commit.author.date,
                sha: commit.sha.slice(0, 7),
            }
        })
        .filter((c): c is ParsedCommit => c !== null)
    
    // Group by week and type
    const weekGroups = new Map<string, Map<string, ParsedCommit[]>>()
    
    for (const commit of parsedCommits) {
        const weekKey = getWeekKey(commit.date)
        
        if (!weekGroups.has(weekKey)) {
            weekGroups.set(weekKey, new Map())
        }
        
        const typeGroups = weekGroups.get(weekKey)!
        if (!typeGroups.has(commit.type)) {
            typeGroups.set(commit.type, [])
        }
        
        typeGroups.get(commit.type)!.push(commit)
    }
    
    // Convert to changelog entries sorted by date
    const entries: ChangelogEntry[] = []
    
    const sortedWeeks = Array.from(weekGroups.keys()).sort((a, b) => b.localeCompare(a))
    
    for (const weekKey of sortedWeeks) {
        const typeGroups = weekGroups.get(weekKey)!
        const sortedTypes = COMMIT_TYPE_ORDER.filter((t) => typeGroups.has(t))
        
        for (const type of sortedTypes) {
            const changes = typeGroups.get(type)!
            entries.push({
                date: formatDate(weekKey),
                type,
                typeLabel: COMMIT_TYPE_LABELS[type] || type,
                changes,
            })
        }
    }
    
    // Merge with backlog entries
    const { changelog: backlogEntries } = await import('./changelog-data')
    
    return [...entries, ...backlogEntries]
}

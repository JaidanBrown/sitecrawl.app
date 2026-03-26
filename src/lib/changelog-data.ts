export interface ChangelogEntry {
    date: string
    type: 'feat' | 'fix' | 'docs' | 'style' | 'refactor' | 'perf' | 'test' | 'chore' | 'ci' | 'build'
    typeLabel: string
    changes: {
      type: string
      scope?: string
      description: string
      date: string
      sha: string
    }[]
  }
  
  export const changelog: ChangelogEntry[] = [
    {
      date: 'March 25, 2026',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'teams', description: 'Team invitations with email invite system', date: '2026-03-25', sha: '978c11c' },
        { type: 'feat', scope: 'teams', description: 'Subscription-based member access control', date: '2026-03-25', sha: '978c11c' },
        { type: 'feat', scope: 'teams', description: 'Pending invitation management with expiry', date: '2026-03-25', sha: '978c11c' },
        { type: 'feat', scope: 'teams', description: 'Owner and member role permissions', date: '2026-03-25', sha: '978c11c' },
      ]
    },
    {
      date: 'March 24, 2026',
      type: 'chore',
      typeLabel: 'Maintenance',
      changes: [
        { type: 'chore', scope: 'dx', description: 'Added conventional commits with commitlint', date: '2026-03-24', sha: '05ddd80' },
        { type: 'chore', scope: 'dx', description: 'Semantic release for automated versioning', date: '2026-03-24', sha: '05ddd80' },
        { type: 'fix', scope: 'auth', description: 'Fixed invite system and password handling', date: '2026-03-24', sha: 'f55fac6' },
      ]
    },
    {
      date: 'February 5, 2026',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'onboarding', description: 'Multi-step onboarding flow for new users', date: '2026-02-05', sha: '9ce4b70' },
        { type: 'feat', scope: 'onboarding', description: 'Profile setup during registration', date: '2026-02-05', sha: '9ce4b70' },
        { type: 'feat', scope: 'onboarding', description: 'Team creation wizard', date: '2026-02-05', sha: '9ce4b70' },
        { type: 'feat', scope: 'onboarding', description: 'Subscription plan selection page', date: '2026-02-05', sha: '9ce4b70' },
      ]
    },
    {
      date: 'January 29, 2026',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'teams', description: 'Team-based multi-tenancy architecture', date: '2026-01-29', sha: 'b4dbe54' },
        { type: 'feat', scope: 'settings', description: 'Team settings page with member management', date: '2026-01-29', sha: '843d408' },
        { type: 'feat', scope: 'settings', description: 'Account settings with profile editing', date: '2026-01-29', sha: '843d408' },
        { type: 'feat', scope: 'settings', description: 'Threshold configuration for alerts', date: '2026-01-29', sha: '843d408' },
      ]
    },
    {
      date: 'January 28, 2026',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'billing', description: 'Stripe payment integration', date: '2026-01-28', sha: '491f5bb' },
        { type: 'feat', scope: 'billing', description: 'Subscription plans with feature limits', date: '2026-01-28', sha: '491f5bb' },
        { type: 'feat', scope: 'billing', description: 'Customer portal for self-service billing', date: '2026-01-28', sha: '491f5bb' },
        { type: 'feat', scope: 'billing', description: 'Trial period support with automatic expiration', date: '2026-01-28', sha: '491f5bb' },
      ]
    },
    {
      date: 'January 27, 2026',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'notifications', description: 'Email notifications for threshold alerts', date: '2026-01-27', sha: '1118417' },
        { type: 'feat', scope: 'ui', description: 'Animated sidebar icons', date: '2026-01-27', sha: 'a601aa5' },
        { type: 'feat', scope: 'ui', description: 'Sentry feedback widget for bug reports', date: '2026-01-27', sha: 'ee03164' },
        { type: 'feat', scope: 'analytics', description: 'Vercel analytics integration', date: '2026-01-27', sha: '0a22bd6' },
        { type: 'feat', scope: 'ui', description: 'Custom favicon', date: '2026-01-27', sha: '569e84f' },
        { type: 'feat', scope: 'navigation', description: 'Project and team switcher in sidebar', date: '2026-01-27', sha: 'fabb57a' },
        { type: 'fix', scope: 'charts', description: 'Graph rendering improvements', date: '2026-01-27', sha: 'ae50216' },
        { type: 'fix', scope: 'ui', description: 'Various UI polish and fixes', date: '2026-01-27', sha: '8b6744b' },
      ]
    },
    {
      date: 'January 26, 2026',
      type: 'fix',
      typeLabel: 'Bug Fixes',
      changes: [
        { type: 'fix', scope: 'dashboard', description: 'Date range filtering fixes', date: '2026-01-26', sha: 'fb9bcfd' },
        { type: 'perf', scope: 'dashboard', description: 'Performance optimizations for data loading', date: '2026-01-26', sha: 'ddc1bd2' },
        { type: 'chore', description: 'Dependency upgrades', date: '2026-01-26', sha: 'f1f8ebc' },
      ]
    },
    {
      date: 'November 24, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'monitoring', description: 'Sentry error tracking integration', date: '2025-11-24', sha: '1e73e36' },
        { type: 'refactor', scope: 'auth', description: 'Authentication flow refactor with Supabase SSR', date: '2025-11-24', sha: '1e73e36' },
      ]
    },
    {
      date: 'November 23, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'auth', description: 'Password reset functionality', date: '2025-11-23', sha: 'da08524' },
        { type: 'feat', scope: 'auth', description: 'Forgot password email flow', date: '2025-11-23', sha: '93191da' },
        { type: 'feat', scope: 'admin', description: 'Super admin user management dashboard', date: '2025-11-23', sha: '3d65a24' },
        { type: 'feat', scope: 'admin', description: 'Edit user URL limits and roles', date: '2025-11-23', sha: '3d65a24' },
        { type: 'feat', scope: 'auth', description: 'Improved user registration flow', date: '2025-11-23', sha: '2b51949' },
        { type: 'chore', description: 'Code cleanup and optimization', date: '2025-11-23', sha: '94c2abb' },
      ]
    },
    {
      date: 'November 17, 2025',
      type: 'refactor',
      typeLabel: 'Refactoring',
      changes: [
        { type: 'refactor', description: 'Removed recommendations feature for SaaS model', date: '2025-11-17', sha: 'e9a4d69' },
        { type: 'refactor', scope: 'routing', description: 'Updated root routing structure', date: '2025-11-17', sha: '5ddb812' },
        { type: 'fix', scope: 'projects', description: 'Updated site details handling', date: '2025-11-17', sha: '73cf7ba' },
      ]
    },
    {
      date: 'November 1, 2025',
      type: 'fix',
      typeLabel: 'Bug Fixes',
      changes: [
        { type: 'fix', description: 'Various bug fixes and stability improvements', date: '2025-11-01', sha: '775269e' },
      ]
    },
    {
      date: 'October 12, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'search', description: 'Global search command palette (Cmd+K)', date: '2025-10-12', sha: '7810d0a' },
        { type: 'feat', scope: 'users', description: 'User avatar support', date: '2025-10-12', sha: '9260fd7' },
        { type: 'fix', description: 'Bug fixes and stability improvements', date: '2025-10-12', sha: '98f1010' },
      ]
    },
    {
      date: 'October 9, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'dashboard', description: 'PageSpeed metrics with Core Web Vitals', date: '2025-10-09', sha: '16cef68' },
        { type: 'feat', scope: 'dashboard', description: 'Internal link analysis', date: '2025-10-09', sha: '16cef68' },
        { type: 'fix', scope: 'build', description: 'Build configuration fixes', date: '2025-10-09', sha: '51d7c40' },
      ]
    },
    {
      date: 'October 8, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'projects', description: 'URL add functionality', date: '2025-10-08', sha: '60c1e9a' },
        { type: 'feat', scope: 'ui', description: 'UX improvements across dashboard pages', date: '2025-10-08', sha: '5365d45' },
      ]
    },
    {
      date: 'October 7, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'ui', description: 'Metric tooltips with explanations', date: '2025-10-07', sha: '8f26431' },
        { type: 'feat', scope: 'dashboard', description: 'Updated SEO metric pages', date: '2025-10-07', sha: '1de8d88' },
      ]
    },
    {
      date: 'October 5, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', scope: 'dashboard', description: 'Dashboard structure with metric cards', date: '2025-10-05', sha: 'e75c081' },
        { type: 'feat', scope: 'users', description: 'URL limit system per user', date: '2025-10-05', sha: 'e75c081' },
        { type: 'fix', scope: 'ui', description: 'UI polish and fixes', date: '2025-10-05', sha: 'e75c081' },
      ]
    },
    {
      date: 'September 27, 2025',
      type: 'feat',
      typeLabel: 'New Features',
      changes: [
        { type: 'feat', description: 'Initial dashboard with Supabase integration', date: '2025-09-27', sha: 'd3616f5' },
        { type: 'feat', scope: 'auth', description: 'Supabase authentication setup', date: '2025-09-27', sha: 'd3616f5' },
        { type: 'feat', scope: 'ui', description: 'shadcn/ui component library', date: '2025-09-27', sha: 'd3616f5' },
      ]
    },
    {
      date: 'September 26, 2025',
      type: 'chore',
      typeLabel: 'Initial Setup',
      changes: [
        { type: 'chore', description: 'Next.js 15 project initialization', date: '2025-09-26', sha: 'cdcef9c' },
        { type: 'chore', description: 'Tailwind CSS configuration', date: '2025-09-26', sha: 'cdcef9c' },
        { type: 'chore', description: 'TypeScript setup', date: '2025-09-26', sha: 'cdcef9c' },
      ]
    },
  ]
  
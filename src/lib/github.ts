import { changelog, type ChangelogEntry } from './changelog-data'

/** @deprecated Prefer importing `changelog` from `./changelog-data` directly. */
export async function getChangelogEntries(): Promise<ChangelogEntry[]> {
    return changelog
}

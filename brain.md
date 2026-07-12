# SiteCrawl — Application Brain

A complete inventory of everything this web application is, does, and can do.

---

## What It Is

**SiteCrawl** is an SEO crawl monitoring dashboard for organizations. It ingests technical SEO crawl reports (from Screaming Frog via an external crawl server), stores and visualizes the data, tracks changes over time, alerts on threshold breaches, and integrates Google Search Console for search performance data.

**Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4, Neon PostgreSQL (Drizzle ORM), Clerk (auth + org billing), Cloudflare R2 (raw report storage), Recharts (charts), Google Search Console API, Google PageSpeed Insights API.

---

## Authentication & Access

- **Sign in / Sign up** via Clerk (`/sign-in`, `/sign-up`)
- **Organization-based access** — all projects and data are scoped to a Clerk organization
- **Organization selection** — users without an active org are redirected to `/select-org` to pick or create one (personal accounts hidden)
- **Protected dashboard** — `(dashboard)` routes require a signed-in user with an active org; unauthenticated users are redirected to sign-in
- **Clerk middleware** runs on all routes; dashboard layout enforces auth at the resource level
- **Profile menu** provides:
  - Account management (Clerk user profile)
  - Team management (Clerk organization profile)
  - Settings modal (thresholds + integrations)
  - Feedback link (`mailto:hello@sitecrawl.app`)
  - Sign out

---

## Projects

- **Create projects** with a domain (required) and optional display name
- **Domain normalization** — strips `http://`, `https://`, `www.`, paths, ports; validates format
- **Per-org uniqueness** — one project per domain per organization
- **Multi-org domain sharing** — the same domain can exist across different orgs; crawl ingest fans data out to all matching projects
- **Project list** in sidebar with favicon (Google favicon service with colored fallback)
- **Switch projects** — clicking a project keeps you on the current section (e.g. if viewing On-Page for site A, switching to site B opens On-Page for site B)
- **Empty state** — home page shows "No projects yet" when the org has no projects
- **Auto-redirect** — visiting `/` redirects to the first project's Summary page
- **Add Project modal** — accessible from sidebar; closes automatically on navigation
- **Plan limits enforced on creation:**
  - Free: 1 project
  - Starter: 5 projects
  - Agency: unlimited

---

## Billing & Plans

- **Three plans** via Clerk organization billing: Free, Starter, Agency
- **Plan box** in sidebar shows current plan name and project usage (e.g. "2 of 5 projects used")
- **Upgrade modal** with Clerk `PricingTable` for organization subscriptions
- **Limit-reached flow** — creating a project beyond the plan limit shows an error with a link to view plans
- Invoices and cancellations managed through Clerk's Team screen

---

## Dashboard Shell & Navigation

- **Collapsible sidebar** — toggle via topbar button; sidebar collapses to zero width but stays mounted (keeps modals/palette working)
- **Topbar** shows current section title, alerts bell, and date filter
- **Sidebar sections** (Platform group):
  1. Summary
  2. Search Performance
  3. Response Codes
  4. URL Types
  5. Indexability
  6. Site Structure
  7. On-Page
  8. Content Issues
  9. PageSpeed
  10. Security
  11. Hreflang
  12. Sitemaps
- **Organization switcher** in sidebar header (personal accounts hidden)
- **Search palette** (`⌘K` / `Ctrl+K`):
  - Fuzzy search across projects and sections
  - Keyboard navigation (arrow keys, Enter, Escape)
  - Groups results by Projects and Sections
  - Navigates to selected item

---

## Date Filtering

Available on all project pages via the topbar date filter. Controls which crawl(s) are shown.

- **Presets:** All dates, Last 7 days, Last 30 days, Last 90 days
- **Custom range** with from/to date pickers
- **URL params:** `?range=7d` or `?from=YYYY-MM-DD&to=YYYY-MM-DD`
- **Summary page** filters crawl *history* (charts and stat deltas use crawls within the window)
- **Section pages** show the *latest crawl* within the selected window
- **Search Performance** filters stored daily GSC rows by date
- **Empty states** when no crawls/data exist in the selected range

---

## Summary Dashboard (`/{domain}/summary`)

The project overview page.

### Health & Status
- **Overall health score** (0–100) computed from error, redirect, and non-indexable ratios
- **Status labels:** Healthy (≥90), Needs attention (≥70), Critical (<70)
- **Last crawl date and time**
- **Combined error responses** (4XX + 5XX)
- **Crawl count** in selected date range (or all time)

### Stat Cards (with deltas vs. previous crawl)
- Total URLs
- Internal HTML
- Redirects
- 4XX Responses
- 5XX Responses
- Indexable URLs
- Non-indexable URLs
- NoIndex Pages

### Time-Series Charts (Recharts line charts)
- **Crawl Discovery** — Total URLs vs Internal HTML over time
- **Indexable URLs** — Indexable vs Non-indexable over time
- **Internal HTML Over Time** — single-series trend
- **NoIndex Pages** — non-indexability trend

### Threshold Support
- All stat cards are clickable to configure metric thresholds
- Shows breach indicators (amber dot) when thresholds are crossed

---

## Response Codes (`/{domain}/response-codes`)

### Stat Cards
- 2XX Success
- 3XX Redirects
- 4XX Client Errors
- 5XX Server Errors
- No Response
- Blocked by robots.txt

### Visualizations
- **Donut chart** — internal response code distribution
- **Bar chart** — response times grouped in one-second buckets

### Tables
- **Internal URLs** — response outcomes for internal crawled URLs
- **External URLs** — response outcomes for external crawled URLs

---

## URL Types (`/{domain}/url-types`)

### Visualizations
- **Donut chart** — internal URL content types (HTML, CSS, JS, images, etc.)
- **Donut chart** — external URL content types

### Tables
- **Internal Breakdown** — content types on your domain
- **External Breakdown** — content types linked from your pages

---

## Indexability (`/{domain}/indexability`)

### Stat Cards
- Indexable URLs
- Non-indexable URLs
- NoIndex Pages
- Canonicalised pages
- Missing Canonical pages

### Tables
- **Robots Directives** — meta robots directives on internal URLs
- **Canonicals** — canonical tag usage across HTML and PDF pages

---

## Site Structure (`/{domain}/site-structure`)

### Visualizations
- **Bar chart** — crawl depth (pages by clicks from start URL)

### Data Views
- **Top Inlinked URLs** — pages receiving the most internal links, with bar indicators
- **Link Issues table** — internal linking checks:
  - Outlinks with no anchor text
  - Non-descriptive anchor text
  - Follow and nofollow inlinks to page

---

## On-Page (`/{domain}/on-page`)

### Stat Cards (issue counts)
- Page Title Issues
- Meta Description Issues
- H1 Issues
- H2 Issues
- Image Issues

### Tables
- **Page Titles** — missing, duplicate, over/under length checks
- **Meta Descriptions** — missing, duplicate, length checks
- **H1 Headings** — missing, multiple, duplicate checks
- **H2 Headings** — structure checks
- **Images** — missing alt text, oversized files (>100 KB), etc.
- **Meta Keywords** — legacy tag usage (informational, not flagged as issues)

---

## Content Issues (`/{domain}/content-issues`)

### Stat Cards
- Content Issues (duplicates, thin content, readability, spelling)
- HTML Validation Issues
- Mobile Issues

### Tables
- **Content Quality** — duplicates, readability, spelling, thin content, soft 404s
- **HTML Validation** — document structure issues
- **Mobile Usability** — mobile rendering and usability checks

---

## PageSpeed (`/{domain}/pagespeed`)

Powered by Google PageSpeed Insights API (run by the crawl server on inlinked URLs).

### Stat Cards
- URLs Tested (mobile)
- Avg LCP (Mobile)
- Avg CLS (Mobile)
- Slow Pages (LCP > 4s)

### Data Views
- **Core Web Vitals table** — per-URL LCP, INP, CLS for mobile and desktop
- **Image Optimization Savings** — aggregated byte savings across:
  - Properly size images
  - Defer offscreen images
  - Efficiently encode images
  - Serve images in next-gen formats
- **Server & Rendering Checks** — Lighthouse audits including:
  - Images without explicit width/height
  - Legacy JavaScript served to modern browsers
  - Inefficient static asset cache policy
  - Text hidden during webfont load
  - Animated content not using video formats
  - TTFB and other performance audits

---

## Security (`/{domain}/security`)

### Stat Cards
- HTTPS Coverage (percentage)
- HTTP URLs
- Mixed Content
- Insecure Forms

### Table
- **Security Checks** across internal and external resources:
  - Missing HSTS header
  - Unsafe cross-origin links
  - Protocol-relative resource links
  - Missing secure Referrer-Policy header
  - Missing X-Frame-Options, X-Content-Type-Options, Content-Security-Policy
  - And more transport security checks

---

## Hreflang (`/{domain}/hreflang`)

- **All-clear banner** when every hreflang check passes (zero issues)
- **Hreflang Checks table** including:
  - Missing x-default
  - Non-200 hreflang URLs
  - Missing/incorrect/duplicate hreflang annotations

---

## Sitemaps (`/{domain}/sitemaps`)

### Stat Cards
- URLs in Sitemap
- URLs Not in Sitemap
- Orphan URLs
- Non-indexable URLs in Sitemap

### Table
- **Sitemap Checks** including:
  - XML sitemap over 50 MB
  - XML sitemap with over 50k URLs
  - Coverage and validity issues

---

## Search Performance (`/{domain}/search-performance`)

Requires Google Search Console integration.

### Connection Flow
- **Connect card** when not connected — explains the integration and links to OAuth
- **OAuth flow** — Google sign-in with read-only Search Console access
- **Auto property matching** — matches `sc-domain:` or URL-prefix properties to project domain
- **Encrypted token storage** — refresh tokens encrypted at rest (AES-256-GCM)
- **Error handling** — friendly messages for cancelled, no property, no refresh token, exchange failures

### When Connected
- **Sync** — lazily refreshes daily GSC data (90-day window, hourly throttle)
- **Stat cards** with period-over-period deltas:
  - Clicks
  - Impressions
  - Avg CTR
  - Avg Position
- **Last 24 Hours chart** — hourly clicks and impressions (live from GSC API)
- **Daily performance chart** — clicks and impressions over the selected date range
- **Top Queries table** — highest-clicked queries, last 28 days (live)
- **Top Pages table** — highest-clicked pages, last 28 days (live)
- **Connection info** — shows connected property, Google email, last sync time

### Settings Integration Management
- View connected Search Console integrations per project
- Disconnect integrations from Settings modal

---

## Metric Thresholds & Alerts

### Configuring Thresholds
- **Click any metric** (stat card or table row) to open the threshold settings modal
- Set threshold **enabled/disabled**
- Choose direction: **Above** or **Below**
- Set a numeric threshold value
- View current metric value in the modal
- Read metric descriptions explaining what each metric means
- **Edit or remove** thresholds from the modal or Settings page
- **Status indicators** on metrics:
  - Gray dot = threshold configured, not breached
  - Amber dot = threshold breached
  - Settings icon on hover

### Alert Generation
- Alerts are **automatically created on crawl ingest** when a configured threshold is breached
- One alert per crawl per metric (deduplicated)
- Alerts store: metric key, direction, threshold value, actual value, project, crawl

### Alert UI
- **Alerts bell** in topbar with unread count badge (capped at "9+")
- **Dropdown** showing recent alerts (up to 30) with:
  - Project name
  - Human-readable breach message (e.g. "4XX Responses rose above 50 — now 73")
  - Timestamp
  - Unread/read visual distinction
- **Mark all read** action
- **Click alert** navigates to the project's Summary page

### Settings: Thresholds Pane
- Lists all enabled thresholds across all org projects
- Shows metric label, project name, direction, and value
- Edit or remove thresholds inline

---

## Crawl Data Pipeline

### Ingest API (`POST /api/ingest`)
- Authenticated via `Authorization: Bearer <CRAWL_INGEST_API_KEY>`
- Accepts:
  - `domain` (required)
  - `crawledAt` (optional, defaults to now)
  - `report` (full structured JSON — preferred)
  - `metrics` (legacy scalar-only payload — backwards compatible)
- **Full report path:**
  - Parses report into scalar fields, metric rows, and PageSpeed rows
  - Stores raw JSON in Cloudflare R2
  - Inserts crawl record, metrics, and PageSpeed data
  - Evaluates all configured thresholds and creates alerts
  - Fans out to all projects matching the domain (across orgs)
- **Legacy metrics path:** inserts crawl with scalar fields only
- Returns project IDs, crawl IDs, and row counts

### Projects API (`GET /api/projects`)
- Used by the crawl server to fetch all projects to crawl
- Same Bearer token authentication
- Returns `{ projects: [{ id, name, domain }] }`

### Crawl Server (`server/crawl.js`)
External Node.js script (not part of the Next.js app) that:
1. Fetches all projects from the dashboard API
2. Deduplicates by domain (crawls each unique domain once)
3. Runs **Screaming Frog SEO Spider** headless crawl per domain
4. Parses the "Crawl Overview" CSV export into structured JSON
5. Runs **Google PageSpeed Insights** on inlinked URLs (mobile + desktop)
6. POSTs the full report to `/api/ingest`
7. Retries failed ingests (up to 3 attempts with backoff)
8. Cleans up temporary crawl directories

### Report Parsing
- CSV parser handles Screaming Frog's "Crawl Overview" format
- Sections become categories (response_codes, page_titles, security, etc.)
- Metrics stored with count, total, percent, and optional URL (for inlinks)
- Summary section scalars mapped to crawl table columns
- PageSpeed data stored per URL per strategy with LCP, INP, CLS, and opportunities

---

## Data Storage

### Neon PostgreSQL (via Drizzle ORM)
Tables:
- **projects** — name, domain, org_id
- **crawls** — per-project crawl records with scalar summary fields and R2 raw key
- **crawl_metrics** — per-crawl metric rows (category, metric, count, total, percent, url)
- **crawl_pagespeed** — per-crawl per-URL PageSpeed vitals and opportunities
- **metric_settings** — per-project threshold configurations
- **alerts** — threshold breach records with read/unread tracking
- **integrations** — OAuth connections (Search Console) with encrypted tokens
- **search_performance** — daily GSC rows (clicks, impressions, CTR, position)

### Cloudflare R2
- Stores full raw crawl report JSON
- Key format: `projects/{projectId}/crawls/{timestamp}.json`

---

## Visualizations & UI Components

- **Stat cards** — metric value with optional delta badge and threshold trigger
- **Line charts** (CrawlChart) — multi-series time-series with Recharts
- **Donut charts** — proportional breakdowns with total label
- **Bar charts** — horizontal/vertical bar visualizations
- **Metric tables** — sortable issue lists with count, percentage bar, checkmarks for zero issues, and threshold triggers
- **Vitals table** — per-URL Core Web Vitals display
- **Modals** — reusable modal shell with header, scrollable content, size variants
- **Section empty states** — contextual messages for no crawls, no data in range, or no metrics

---

## Database Scripts

- `npm run db:push` — push Drizzle schema to Neon
- `npm run db:seed` — seed database with sample data
- `npm run db:backfill-r2` — backfill raw reports to R2 from existing data
- `npm run db:import-supabase` — import data from Supabase

---

## Metric Categories (Full List)

These are all the crawl metric categories the app understands and can display:

| Category | What It Covers |
|---|---|
| `response_codes` | HTTP status outcomes (2XX, 3XX, 4XX, 5XX, blocked, no response) |
| `response_time_seconds` | URL response time buckets |
| `internal` | Internal content types |
| `external` | External content types |
| `directives` | Meta robots directives |
| `canonicals` | Canonical tag checks |
| `depth_clicks_from_start_url` | Crawl depth from start URL |
| `inlinks` | Internal links pointing at pages (with URLs) |
| `links` | Internal linking quality checks |
| `page_titles` | Title tag checks |
| `meta_description` | Meta description checks |
| `meta_keywords` | Legacy meta keywords |
| `h1` | H1 heading checks |
| `h2` | H2 heading checks |
| `images` | Image optimization and alt text |
| `content` | Content quality (duplicates, thin, readability, spelling) |
| `validation` | HTML document validation |
| `mobile` | Mobile usability |
| `reduce_server_response_times_ttfb` | Lighthouse performance audits |
| `security` | HTTPS, mixed content, security headers |
| `hreflang` | International targeting annotations |
| `sitemaps` | XML sitemap coverage and validity |

### Crawl Scalar Fields (stored on crawl records)
- `total_urls`, `internal_html`, `redirects`
- `responses_4xx`, `responses_5xx`
- `indexable_urls`, `non_indexable_urls`, `noindex_pages`

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `DATABASE_URL` | Neon PostgreSQL connection |
| `CRAWL_INGEST_API_KEY` | Shared secret for ingest + projects APIs |
| `R2_ACCOUNT_ID` | Cloudflare R2 account |
| `R2_ACCESS_KEY_ID` | R2 access key |
| `R2_SECRET_ACCESS_KEY` | R2 secret key |
| `R2_BUCKET` | R2 bucket name |
| `GOOGLE_OAUTH_CLIENT_ID` | Search Console OAuth client |
| `GOOGLE_OAUTH_CLIENT_SECRET` | OAuth client secret |
| `GOOGLE_OAUTH_REDIRECT_URI` | OAuth callback URL |
| `INTEGRATION_ENCRYPTION_KEY` | AES-256-GCM key for token encryption |

### Crawl Server Additional Variables
| Variable | Purpose |
|---|---|
| `DASHBOARD_URL` | Base URL of the Next.js app |
| `PAGESPEED_API_KEY` | Google PageSpeed Insights API key |

---

## What It Does NOT Do (Yet)

- No built-in crawl scheduling (crawl server is run externally/manually)
- No user-invoked crawl trigger from the dashboard
- No email/Slack/webhook notifications for alerts (in-app only)
- No raw report download or URL-level drill-down from the UI
- No multi-user role permissions beyond Clerk org membership
- No custom dashboard or report builder
- No historical metric comparison across sections (deltas only on Summary stat cards and Search Performance)
- Sections in the nav without a registered component show "coming soon" (currently all 12 sections are implemented)

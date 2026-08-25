/**
 * Must match the basePath logic in next.config.js exactly. Next.js can't
 * import this file into next.config.js (that file runs in plain Node
 * before any TS/webpack transform), so the logic is duplicated there —
 * keep both in sync if the deploy target ever changes.
 *
 * Empty in dev (bare localhost URLs), '/portfolio_website' in production
 * builds — matches next.config.js's basePath so links stay in sync
 * with however this specific page load was actually served.
 *
 * Needed because next/link and next/router auto-prefix with basePath,
 * but plain <img>/<a> src/href strings do not — anything hardcoded
 * (avatar, project images, PDFs, favicon) has to be prefixed manually.
 */
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/portfolio_website' : '';

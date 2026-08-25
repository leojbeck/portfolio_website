/**
 * Must match `basePath` in next.config.js exactly. Next.js can't import
 * this file into next.config.js (that file runs in plain Node before any
 * TS/webpack transform), so the value is duplicated there — keep both in
 * sync if the deploy target ever changes.
 *
 * Needed because next/link and next/router auto-prefix with basePath,
 * but plain <img>/<a> src/href strings do not — anything hardcoded
 * (avatar, project images, PDFs, favicon) has to be prefixed manually.
 */
export const BASE_PATH = '/portfolio_website';

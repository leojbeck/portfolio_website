/**
 * Must match the basePath logic in next.config.js exactly. Next.js can't
 * import this file into next.config.js (that file runs in plain Node
 * before any TS/webpack transform), so the logic is duplicated there —
 * keep both in sync if the deploy target ever changes.
 *
 * basePath is ONLY for a manual GitHub Pages deploy (served from a
 * /portfolio_website subpath). The real production deployment is Vercel
 * with a custom domain, served from the root — Vercel always sets
 * VERCEL=1 during its builds, so that's used to keep this empty there.
 * Also empty in dev, so local URLs stay at the normal bare root.
 *
 * Needed because next/link and next/router auto-prefix with basePath,
 * but plain <img>/<a> src/href strings do not — anything hardcoded
 * (avatar, project images, PDFs, favicon) has to be prefixed manually.
 */
const isGitHubPagesBuild = process.env.NODE_ENV === 'production' && !process.env.VERCEL;
export const BASE_PATH = isGitHubPagesBuild ? '/portfolio_website' : '';

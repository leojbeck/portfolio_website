/**
 * @type {import('next').NextConfig}
 */
const { execSync } = require('child_process');

// basePath is ONLY for a manual GitHub Pages deploy (npm run deploy ->
// gh-pages -d out), which serves from a /portfolio_website subpath. The
// real production deployment is Vercel with a custom domain, served from
// the root — Vercel always sets VERCEL=1 during its builds, so that's
// used to keep basePath empty there. Also empty in dev so local URLs
// stay at the normal bare root.
const isGitHubPagesBuild = process.env.NODE_ENV === 'production' && !process.env.VERCEL;
const BASE_PATH = isGitHubPagesBuild ? '/portfolio_website' : '';

// Date of the last git commit — shown in the footer as "last updated."
// Falls back to today's date if git isn't available (e.g. no .git present).
let lastUpdated;
try {
  lastUpdated = execSync('git log -1 --format=%cd --date=short').toString().trim();
} catch {
  lastUpdated = new Date().toISOString().slice(0, 10);
}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: BASE_PATH,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
    // Resolved once here (where VERCEL/NODE_ENV are reliably real) and
    // handed to the client as a plain string — see lib/basePath.ts for
    // why this can't just be re-derived from process.env.VERCEL client-side.
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
}

module.exports = nextConfig
/**
 * @type {import('next').NextConfig}
 */
const { execSync } = require('child_process');

// basePath only applies to production builds (what actually gets deployed
// to GitHub Pages at /portfolio_website/) — kept empty in dev so local
// URLs stay at the normal bare root. Next sets NODE_ENV automatically:
// 'development' for `next dev`, 'production' for `next build`.
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/portfolio_website' : '';

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
  },
}

module.exports = nextConfig
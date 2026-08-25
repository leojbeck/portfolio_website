/**
 * Reads the already-resolved basePath from NEXT_PUBLIC_BASE_PATH, which
 * next.config.js computes once (from NODE_ENV + VERCEL) and exposes via
 * its `env` field.
 *
 * This file used to re-derive the value itself from process.env.VERCEL —
 * that broke in production. Next.js only auto-inlines NODE_ENV into the
 * client bundle; arbitrary Node env vars like VERCEL are never exposed to
 * the browser, so `process.env.VERCEL` silently evaluated to undefined
 * client-side while correctly being "1" during the server-side build.
 * That divergence meant server-rendered HTML (hard page loads) got the
 * correct empty basePath, while any client-side re-render — e.g. after
 * router.push() navigation — recomputed it in the browser and got
 * '/portfolio_website' instead, breaking every image on in-app
 * navigation until the next hard refresh. Reading a single resolved
 * NEXT_PUBLIC_ value instead guarantees server and client agree, since
 * Next statically inlines `env`-listed vars identically everywhere.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

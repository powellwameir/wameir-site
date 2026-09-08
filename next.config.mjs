/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images are served from /public and pre-toned per §4A (no runtime CSS filters),
  // so the built-in optimizer is unnecessary.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Enable Cloudflare bindings (env vars, KV, etc.) during `next dev` via the
// OpenNext adapter. No-op in production builds. Wrapped so a plain `next build`
// without the adapter installed still works.
try {
  const { initOpenNextCloudflareForDev } = await import("@opennextjs/cloudflare");
  await initOpenNextCloudflareForDev();
} catch {
  // adapter not installed / not in a dev context — ignore
}

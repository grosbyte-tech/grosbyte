/**
 * Rewrites public paths to a CDN URL when NEXT_PUBLIC_CDN_URL is configured.
 */
export function withCdn<T>(assets: T): T {
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
  if (!cdnUrl) return assets;

  const rewrite = (val: unknown): unknown => {
    if (typeof val === "string" && val.startsWith("/")) {
      return `${cdnUrl.replace(/\/$/, "")}${val}`;
    }
    if (val && typeof val === "object") {
      const out: Record<string, unknown> | unknown[] = Array.isArray(val) ? [] : {};
      for (const k of Object.keys(val)) {
        (out as Record<string, unknown>)[k] = rewrite((val as Record<string, unknown>)[k]);
      }
      return out;
    }
    return val;
  };

  return rewrite(assets) as T;
}

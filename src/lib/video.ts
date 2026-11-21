import { clientEnv } from "@/lib/env";

/**
 * Returns a CDN video stream URL if configured via NEXT_PUBLIC_VIDEO_CDN_URL,
 * or falls back to a locally served public video path.
 */
export function getVideoUrl(fallbackPath = "/videos/employee-working.mp4"): string {
  if (clientEnv.NEXT_PUBLIC_VIDEO_CDN_URL) {
    const cdnBase = clientEnv.NEXT_PUBLIC_VIDEO_CDN_URL.replace(/\/$/, "");
    const relativePath = fallbackPath.replace(/^\//, "");
    return `${cdnBase}/${relativePath}`;
  }
  return fallbackPath;
}

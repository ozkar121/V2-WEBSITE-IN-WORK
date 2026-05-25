// Rewrite a Supabase storage *public* URL to use the on-the-fly image
// transformation endpoint (resize + WebP via Accept header).
// Falls back to the original URL for any non-Supabase asset.
export function sbImage(url: string | undefined | null, width = 800, quality = 70): string {
  if (!url) return "";
  const transformed = url.replace("/storage/v1/object/public/", "/storage/v1/render/image/public/");
  if (transformed === url) return url;
  const sep = transformed.includes("?") ? "&" : "?";
  return `${transformed}${sep}width=${width}&quality=${quality}&resize=contain`;
}

// Build a responsive srcset for the same asset at multiple widths.
export function sbImageSrcSet(url: string | undefined | null, widths: number[] = [400, 800, 1200], quality = 70): string {
  if (!url) return "";
  return widths.map((w) => `${sbImage(url, w, quality)} ${w}w`).join(", ");
}

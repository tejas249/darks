/**
 * Return a usable URL string for an imported asset.
 *
 * Bundlers may provide asset imports as a string URL or as an object
 * with `.src` / `.default` fields. This helper normalizes those shapes.
 */
export default function getAssetUrl(asset: any): string {
  if (!asset) return "";
  if (typeof asset === "string") return asset;
  // Common shapes: { src: string } or { default: string }
  return asset.src ?? asset.default ?? "";
}

import { useLocation } from "@tanstack/react-router";

/**
 * Returns "/v2" when the current route is under /v2,
 * "/v3" when under /v3, otherwise "".
 * Use to prefix internal links and pick versioned assets.
 */
export function useV2Base(): string {
  const { pathname } = useLocation();
  if (pathname.startsWith("/v2")) return "/v2";
  if (pathname.startsWith("/v3")) return "/v3";
  return "";
}

/**
 * Returns true when the current route is under /v2.
 */
export function useIsV2(): boolean {
  const { pathname } = useLocation();
  return pathname.startsWith("/v2");
}

/**
 * Returns true when the current route is under /v3.
 */
export function useIsV3(): boolean {
  const { pathname } = useLocation();
  return pathname.startsWith("/v3");
}

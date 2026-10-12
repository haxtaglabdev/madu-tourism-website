import { useEffect } from "react";
import { useLoading } from "./LoadingContext";

interface RouteLoadingFallbackProps {
  /** Optional identifier for the route being loaded */
  routeId?: string;
}

/**
 * RouteLoadingFallback connects React Suspense to the luxury LoadingContext.
 *
 * When React is waiting for a lazy route bundle:
 * 1. This fallback mounts and signals startLoading.
 * 2. If chunk download takes > 120ms, the full-screen luxury LoadingScreen appears.
 * 3. When the route bundle is ready and the page mounts, this fallback unmounts,
 *    triggering a smooth fade-out with zero artificial delay.
 */
export default function RouteLoadingFallback({
  routeId: _routeId = "route-chunk",
}: RouteLoadingFallbackProps) {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    return () => {
      stopLoading();
    };
  }, [startLoading, stopLoading]);

  // Render an invisible placeholder with aria-busy to ensure layout stability
  return (
    <div
      aria-busy="true"
      aria-hidden="true"
      className="min-h-[60vh] w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

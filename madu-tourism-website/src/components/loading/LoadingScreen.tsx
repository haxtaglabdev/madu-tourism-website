import { memo } from "react";
import { images } from "../../assets";

/**
 * MaduTseylon Luxury Loading Screen — Matching Reference Design
 *
 * Contains ONLY:
 * 1. The existing MaduTseylon logo image (identical size, position & appearance).
 * 2. The small, refined circular loading treatment matching the reference (single elegant gold open stroke).
 * 3. The simple, clean warm ivory background (#FAF8F5).
 *
 * - Strictly NO text beneath the logo.
 * - Single loading indicator closely aligned with the logo.
 * - Dismisses immediately the instant the page content is ready.
 */
export default memo(function LoadingScreen() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading Madu Tseylon"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F5]"
      role="status"
    >
      {/* Centered Logo + Proportional Single Circular Loading Arc */}
      <div className="relative flex items-center justify-center">
        {/* Refined Single Circular Loading Indicator Matching Reference Image */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 select-none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="animate-[madu-orbit_2.2s_linear_infinite]"
            cx="50"
            cy="50"
            fill="none"
            r="46.5"
            stroke="#003d2c"
            strokeDasharray="225 67"
            strokeLinecap="round"
            strokeWidth="2.2"
            style={{ transformOrigin: "50px 50px" }}
          />
        </svg>

        {/* Existing Authentic MaduTseylon Logo (Original Size & Appearance Preserved) */}
        <div className="relative flex items-center justify-center">
          <img
            alt="Madu Tseylon Tours"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain select-none"
            decoding="async"
            fetchPriority="high"
            height={112}
            src={images.logo}
            width={112}
          />
        </div>

        {/* Strictly NO text underneath or around the logo */}
      </div>
    </div>
  );
});

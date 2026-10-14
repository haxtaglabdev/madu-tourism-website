import { memo } from "react";

interface BotanicalProps {
  className?: string;
}

/**
 * SubtleBotanicalAccent
 *
 * Minimal, delicate tropical botanical line-art sprigs in warm champagne gold,
 * hugging closely to the outer contour of the circular logo frame.
 * Proportional and subtle, keeping the authentic MaduTseylon logo as the primary focus.
 */
export const SubtleBotanicalAccent = memo(function SubtleBotanicalAccent({
  className = "",
}: BotanicalProps) {
  return (
    <g
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient
          id="botanicalAccentGradUL"
          x1="0%"
          x2="100%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C5A880" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#D8C3A5" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="botanicalAccentGradLR"
          x1="100%"
          x2="0%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5A880" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#D8C3A5" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* ── Upper-Left Delicate Palm Sprig (hugging the outer circle arc) ── */}
      <g opacity="0.85">
        {/* Curved stem following the circle contour */}
        <path
          d="M62,118 C72,78 108,44 146,34"
          fill="none"
          stroke="url(#botanicalAccentGradUL)"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        {/* Delicate fine-line palm leaflets arching outward subtly */}
        <path
          d="
            M70,108 Q52,100 48,88
            M80,94 Q62,80 60,68
            M92,80 Q76,64 76,50
            M106,66 Q92,48 94,36
            M122,54 Q112,36 118,26
            M138,42 Q132,26 142,20
          "
          fill="none"
          stroke="#C5A880"
          strokeLinecap="round"
          strokeWidth="0.95"
        />
        {/* Subtle inner Ceylon leaf detail */}
        <path
          d="M86,88 Q100,72 118,60"
          fill="none"
          stroke="#D8C3A5"
          strokeLinecap="round"
          strokeWidth="0.75"
          opacity="0.6"
        />
        {/* Tiny golden accent dewdrops */}
        <circle cx="48" cy="88" fill="#C5A880" opacity="0.65" r="1.2" />
        <circle cx="60" cy="68" fill="#D8C3A5" opacity="0.65" r="1.1" />
        <circle cx="142" cy="20" fill="#C5A880" opacity="0.5" r="1.1" />
      </g>

      {/* ── Lower-Right Delicate Palm Sprig (hugging the outer circle arc) ── */}
      <g opacity="0.85">
        {/* Curved stem following the circle contour */}
        <path
          d="M258,202 C248,242 212,276 174,286"
          fill="none"
          stroke="url(#botanicalAccentGradLR)"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        {/* Delicate fine-line palm leaflets arching outward subtly */}
        <path
          d="
            M250,212 Q268,220 272,232
            M240,226 Q258,240 260,252
            M228,240 Q244,256 244,270
            M214,254 Q228,272 226,284
            M198,266 Q208,284 202,294
            M182,278 Q188,294 178,300
          "
          fill="none"
          stroke="#C5A880"
          strokeLinecap="round"
          strokeWidth="0.95"
        />
        {/* Subtle inner Ceylon leaf detail */}
        <path
          d="M234,232 Q220,248 202,260"
          fill="none"
          stroke="#D8C3A5"
          strokeLinecap="round"
          strokeWidth="0.75"
          opacity="0.6"
        />
        {/* Tiny golden accent dewdrops */}
        <circle cx="272" cy="232" fill="#C5A880" opacity="0.65" r="1.2" />
        <circle cx="260" cy="252" fill="#D8C3A5" opacity="0.65" r="1.1" />
        <circle cx="178" cy="300" fill="#C5A880" opacity="0.5" r="1.1" />
      </g>
    </g>
  );
});

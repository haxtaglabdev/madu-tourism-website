import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "../../hooks/useInView";

export type RevealVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
}

/** Single-element scroll reveal. Triggers once when entering the viewport. */
export default function Reveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
  style,
}: RevealProps) {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${isInView ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{
        ...style,
        ...(delay > 0 ? { transitionDelay: `${delay}ms` } : null),
      }}
    >
      {children}
    </Tag>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Observes a container once; children with `.reveal-item` stagger in together.
 * Use `--reveal-index` on each item for delay: calc(var(--reveal-index) * 80ms).
 */
export function RevealGroup({
  children,
  className = "",
  as: Tag = "div",
}: RevealGroupProps) {
  const [ref, isInView] = useInView<HTMLElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <Tag
      ref={ref}
      className={`reveal-group${isInView ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  );
}

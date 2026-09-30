import { useEffect, useRef, useState, type RefObject } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * Observes an element and reports when it enters the viewport.
 * Defaults to firing once for scroll-reveal use cases.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {},
): [RefObject<T | null>, boolean] {
  const {
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.12,
    once = true,
  } = options;

  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (once && hasTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!once) setIsInView(false);
          return;
        }

        hasTriggeredRef.current = true;
        setIsInView(true);
        if (once) observer.unobserve(node);
      },
      { root: null, rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return [ref, isInView];
}

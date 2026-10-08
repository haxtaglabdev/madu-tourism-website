import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

/** Sets document title (and optional meta description) for the current route. */
export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    if (!description) return;

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);

  return null;
}

import { Navigate, useParams } from "react-router-dom";
import PackageDetailView from "../components/package/PackageDetailView";
import PageMeta from "../components/seo/PageMeta";
import { getLocalizedPackageBySlug } from "../data/localizedPackages";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";
import NotFound from "./NotFound";

const OLD_SLUG_REDIRECTS: Record<string, string> = {
  "classic-ceylon-discovery": "sigiriya-kandy-2-days",
  "ceylon-essentials-escape": "sri-lanka-5-days",
  "island-highlights-southern-shores": "sri-lanka-7-days",
  "ancient-kingdoms-wild-southern-coast": "sri-lanka-10-days",
  "grand-ceylon-island-expedition": "sri-lanka-10-days",
  "highland-tea-sacred-kingdoms": "ella-day-tour",
  "wild-leopards-mirissa-shores": "sri-lanka-7-days",
  "classic-ceylon": "sigiriya-kandy-2-days",
  "ceylon-essentials": "sri-lanka-5-days",
  "island-highlights": "sri-lanka-7-days",
  "ancient-kingdoms": "sri-lanka-10-days",
  "grand-expedition": "sri-lanka-10-days",
  "highland-tea": "ella-day-tour",
  "wild-leopards": "sri-lanka-7-days",
};

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { currentLang, getLocalizedPath } = useCurrentLanguage();

  if (slug && OLD_SLUG_REDIRECTS[slug]) {
    const targetSlug = OLD_SLUG_REDIRECTS[slug];
    return <Navigate replace to={getLocalizedPath(`/tour-packages/${targetSlug}`)} />;
  }

  const pkg = slug ? getLocalizedPackageBySlug(slug, currentLang) : undefined;

  if (!pkg) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta description={pkg.metaDescription} title={pkg.metaTitle} />
      <main>
        <PackageDetailView pkg={pkg} />
      </main>
    </>
  );
}

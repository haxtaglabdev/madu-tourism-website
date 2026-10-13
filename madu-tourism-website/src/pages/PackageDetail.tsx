import { Navigate, useParams } from "react-router-dom";
import PackageDetailView from "../components/package/PackageDetailView";
import PageMeta from "../components/seo/PageMeta";
import { getLocalizedPackageBySlug } from "../data/localizedPackages";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { currentLang, getLocalizedPath } = useCurrentLanguage();
  const pkg = slug ? getLocalizedPackageBySlug(slug, currentLang) : undefined;

  if (!pkg) {
    return <Navigate replace to={getLocalizedPath("/tour-packages")} />;
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

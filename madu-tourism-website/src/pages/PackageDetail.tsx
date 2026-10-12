import { Navigate, useParams } from "react-router-dom";
import PackageDetailView from "../components/package/PackageDetailView";
import PageMeta from "../components/seo/PageMeta";
import { getPackageBySlug } from "../data/packageDetails";

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = slug ? getPackageBySlug(slug) : undefined;

  if (!pkg) {
    return <Navigate replace to="/tour-packages" />;
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

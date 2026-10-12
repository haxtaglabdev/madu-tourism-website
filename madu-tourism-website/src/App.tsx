import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/layout/ScrollToTop";

/* ── Route-level code splitting ──
   Each page (and its unique deps) loads on-demand.
   PackageDetail is the biggest win: it pulls in framer-motion,
   PackageRouteMap, sriLankaLandPaths (42 KB), and packageDetails data. */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Destinations = lazy(() => import("./pages/Destinations"));
const TourPackages = lazy(() => import("./pages/TourPackages"));
const PackageDetail = lazy(() => import("./pages/PackageDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

/** Minimal route-transition spinner using existing design colours. */
function RouteFallback() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <div
        aria-label="Loading page"
        role="status"
        style={{
          width: 36,
          height: 36,
          border: "3px solid #e5e0d8",
          borderTopColor: "#003d2c",
          borderRadius: "50%",
          animation: "route-spin 0.7s linear infinite",
        }}
      />
      <style>{`@keyframes route-spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <Home />
              </Suspense>
            }
            path="/"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <About />
              </Suspense>
            }
            path="/about"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <Destinations />
              </Suspense>
            }
            path="/destinations"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <TourPackages />
              </Suspense>
            }
            path="/tour-packages"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <PackageDetail />
              </Suspense>
            }
            path="/tour-packages/:slug"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <Gallery />
              </Suspense>
            }
            path="/gallery"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <Contact />
              </Suspense>
            }
            path="/contact"
          />
          <Route
            element={
              <Suspense fallback={<RouteFallback />}>
                <NotFound />
              </Suspense>
            }
            path="*"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


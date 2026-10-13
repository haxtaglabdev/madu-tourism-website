import { lazy, Suspense, type ComponentType } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageSync from "./components/layout/LanguageSync";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/layout/ScrollToTop";
import {
  LoadingProvider,
  LoadingScreen,
  RouteErrorBoundary,
} from "./components/loading";

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

/**
 * Route wrapper that renders the minimal luxury LoadingScreen ONLY
 * while the page component is genuinely loading over the network.
 * As soon as the page is ready, it is dismissed immediately with zero artificial delay.
 */
function LazyRoute({ Component }: { Component: ComponentType }) {
  return (
    <RouteErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <Component />
      </Suspense>
    </RouteErrorBoundary>
  );
}

export default function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <LanguageSync />
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            {/* English Routes (Default) */}
            <Route element={<LazyRoute Component={Home} />} path="/" />
            <Route element={<LazyRoute Component={About} />} path="/about" />
            <Route
              element={<LazyRoute Component={Destinations} />}
              path="/destinations"
            />
            <Route
              element={<LazyRoute Component={TourPackages} />}
              path="/tour-packages"
            />
            <Route
              element={<LazyRoute Component={PackageDetail} />}
              path="/tour-packages/:slug"
            />
            <Route element={<LazyRoute Component={Gallery} />} path="/gallery" />
            <Route element={<LazyRoute Component={Contact} />} path="/contact" />

            {/* Russian Routes */}
            <Route element={<LazyRoute Component={Home} />} path="/ru" />
            <Route element={<LazyRoute Component={About} />} path="/ru/about" />
            <Route
              element={<LazyRoute Component={Destinations} />}
              path="/ru/destinations"
            />
            <Route
              element={<LazyRoute Component={TourPackages} />}
              path="/ru/tour-packages"
            />
            <Route
              element={<LazyRoute Component={PackageDetail} />}
              path="/ru/tour-packages/:slug"
            />
            <Route element={<LazyRoute Component={Gallery} />} path="/ru/gallery" />
            <Route element={<LazyRoute Component={Contact} />} path="/ru/contact" />

            {/* Not Found */}
            <Route element={<LazyRoute Component={NotFound} />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}



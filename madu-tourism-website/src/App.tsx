import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/layout/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TourPackages from "./pages/TourPackages";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Destinations />} path="/destinations" />
          <Route element={<TourPackages />} path="/tour-packages" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

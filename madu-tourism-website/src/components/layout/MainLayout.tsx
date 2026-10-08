import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-sand-bg text-charcoal antialiased">
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

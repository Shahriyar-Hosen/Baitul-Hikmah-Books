import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => (
  <div>
    <Navbar />
    <div className="container mx-auto px-4">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default MainLayout;

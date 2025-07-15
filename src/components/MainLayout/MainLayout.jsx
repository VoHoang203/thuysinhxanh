import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith("/products");
  return (
    <div className="bg-white text-gray-800 font-sans ">
      <Header />
      {showSidebar && <Sidebar />}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 
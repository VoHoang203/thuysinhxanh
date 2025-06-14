import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith("/products");
  return (
    <>
      <Header />
      {showSidebar && <Sidebar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

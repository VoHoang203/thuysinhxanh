import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router";

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
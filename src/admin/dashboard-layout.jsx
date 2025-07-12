import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 flex-grow">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

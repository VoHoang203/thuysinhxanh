import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import {
  Home,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
  Bell,
  Fish,
} from "lucide-react";

export default function Header() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/dashboard/orders", icon: ShoppingCart, label: "Orders" },
    { href: "/dashboard/products", icon: Package2, label: "Products" },
    { href: "/dashboard/users", icon: Users2, label: "Users" },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      {/* Mobile Menu */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform"
          >
            <nav className="grid gap-6 text-lg font-medium p-6">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 text-lg font-semibold text-white md:text-base"
              >
                <Fish className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Fish Store</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-900"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

     
      <div className="hidden md:flex items-center text-sm text-gray-500">
        <span>Pages</span>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <span className="mx-2">/</span>
            <Link
              href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              className="capitalize hover:text-gray-900"
            >
              {segment}
            </Link>
          </React.Fragment>
        ))}
      </div>

      <div className="relative ml-auto flex items-center gap-4">
       
        <div ref={userMenuRef} className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="rounded-full"
          >
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold">
              AD
            </div>
            <span className="sr-only">Toggle user menu</span>
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
              <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
                My Account
              </div>
              <div className="border-t border-gray-100"></div>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

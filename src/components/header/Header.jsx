import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  User,
  Phone,
  MapPin,
} from "lucide-react";
import useCartStore from "../../store/useCartStore";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalItems } = useCartStore();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const cartItemCount = getTotalItems();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-green-700 text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>HN: 0865313256 | HCM: 0785111988</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Giao hàng toàn quốc</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>NHẬN HÀNG THANH TOÁN SAU (COD)</span>
              <Link to="/order-tracking" className="hover:text-green-200">
                KIỂM TRA ĐƠN HÀNG
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TS</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-green-700">
                Thủy Sinh Tím
              </h1>
              <p className="text-sm text-gray-600">Khởi Nguồn Đam Mê</p>
            </div>
          </Link>
          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>{" "}
          {/* User actions */}
          <div className="flex items-center space-x-3">
            {/* User menu */}
            <Link
              to="/login"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-green-600"
            >
              <User className="w-5 h-5" />
              <span>Tài khoản</span>
            </Link>            {/* Cart button */}
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:border-green-500 hover:text-green-600 transition-colors group"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:block font-medium">Giỏ hàng</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-green-50 border-t border-green-200">
        <div className="container mx-auto px-4">
          <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
              <li>
                <Link
                  to="/"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=thuc-an"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Thức ăn cá
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=may-loc"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Máy lọc
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=den-thuy-sinh"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Đèn thủy sinh
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=phan-nen"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Phân nền
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tin tức
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  to="/login"
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

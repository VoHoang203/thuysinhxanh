import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Thủy Sinh Tím</h3>
                <p className="text-sm text-gray-400">Khởi Nguồn Đam Mê</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Chuyên cung cấp sản phẩm thủy sinh chất lượng cao, từ cây thủy
              sinh, cá cảnh đến thiết bị chăm sóc bể cá.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">HƯỚNG DẪN</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/huong-dan-mua-hang"
                  className="text-gray-300 hover:text-white"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/huong-dan-thanh-toan"
                  className="text-gray-300 hover:text-white"
                >
                  Hướng dẫn thanh toán
                </Link>
              </li>
              <li>
                <Link
                  to="/huong-dan-giao-nhan"
                  className="text-gray-300 hover:text-white"
                >
                  Hướng dẫn giao nhận
                </Link>
              </li>
              <li>
                <Link
                  to="/dieu-khoan-dich-vu"
                  className="text-gray-300 hover:text-white"
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CHÍNH SÁCH</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/chinh-sach-chung"
                  className="text-gray-300 hover:text-white"
                >
                  Chính sách & Quy định chung
                </Link>
              </li>
              <li>
                <Link
                  to="/chinh-sach-bao-mat"
                  className="text-gray-300 hover:text-white"
                >
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link
                  to="/chinh-sach-van-chuyen"
                  className="text-gray-300 hover:text-white"
                >
                  Chính sách vận chuyển, giao nhận
                </Link>
              </li>
              <li>
                <Link
                  to="/chinh-sach-doi-tra"
                  className="text-gray-300 hover:text-white"
                >
                  Chính sách đổi/trả hàng và hoàn tiền
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CHĂM SÓC KHÁCH HÀNG</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-green-500" />
                <div>
                  <p className="text-gray-300">
                    Cuối ngõ 26 phố Nghĩa Đô, Cầu Giấy, HN
                  </p>
                  <p className="text-gray-300">
                    Số 123 Đại La, Hai Bà Trưng, HN
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-gray-300">HN: 0865313256</p>
                  <p className="text-gray-300">HCM: 0785111988</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500" />
                <p className="text-gray-300">thuysinhtim@gmail.com</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">
                CHẤP NHẬN THANH TOÁN
              </h5>
              <div className="flex space-x-2">
                <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">V</span>
                </div>
                <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">M</span>
                </div>
                <div className="w-8 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">P</span>
                </div>
                <div className="w-8 h-6 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">J</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Design by Thủy Sinh Tím | Bản quyền thuộc về{" "}
            <a href="#" className="text-green-500 hover:text-green-400">
              THỦY SINH TÍM
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2024 Thủy Sinh Tím. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 space-y-2 z-40">
        <a
          href="tel:0865313256"
          className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
          title="Gọi điện"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="sms:0865313256"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          title="Nhắn tin"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          title="Chat Zalo"
        >
          <span className="text-sm font-bold">Z</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

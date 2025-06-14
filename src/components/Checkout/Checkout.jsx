import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/useCartStore";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    note: "",
    paymentMethod: "cod",
  });

  const [isLoading, setIsLoading] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate("/checkout/success");
    }, 2000);
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Thông tin nhận hàng
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (tùy chọn)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập email của bạn"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Địa chỉ *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập địa chỉ cụ thể"
                  />
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tỉnh thành *
                    </label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Chọn tỉnh thành</option>
                      <option value="hanoi">Hà Nội</option>
                      <option value="hochiminh">TP. Hồ Chí Minh</option>
                      <option value="danang">Đà Nẵng</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quận huyện *
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Chọn quận huyện</option>
                      <option value="caugiay">Cầu Giấy</option>
                      <option value="haibatrung">Hai Bà Trưng</option>
                      <option value="quan1">Quận 1</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phường xã *
                    </label>
                    <select
                      name="ward"
                      value={formData.ward}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Chọn phường xã</option>
                      <option value="nghiado">Nghĩa Đô</option>
                      <option value="daila">Đại La</option>
                      <option value="dakao">Đa Kao</option>
                    </select>
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ghi chú (tùy chọn)
                  </label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Ghi chú về đơn hàng"
                  />
                </div>

                {/* Shipping */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Vận chuyển
                  </h3>
                  <div className="text-gray-600">
                    Vui lòng nhập thông tin giao hàng
                  </div>
                </div>

                {/* Payment */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Thanh toán
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">
                        Thanh toán khi giao hàng (COD)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? "Đang xử lý..." : "ĐẶT HÀNG"}
                </button>

                {/* Policies */}
                <div className="text-xs text-gray-500 space-y-1">
                  <p>
                    <a href="#" className="text-green-600 hover:underline">
                      Chính sách hoàn trả
                    </a>{" "}
                    |
                    <a href="#" className="text-green-600 hover:underline ml-1">
                      Chính sách bảo mật
                    </a>{" "}
                    |
                    <a href="#" className="text-green-600 hover:underline ml-1">
                      Điều khoản sử dụng
                    </a>
                  </p>
                  <p className="mt-2">
                    Phí vận chuyển và thời gian dự kiến giao hàng sẽ được thông
                    báo qua điện thoại sau khi quý khách đặt hàng thành công
                    trên Website.
                  </p>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Đơn hàng ({items.length} sản phẩm)
              </h3>

              {/* Products */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={item.images?.[0] || "/placeholder-product.jpg"}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="hidden w-full h-full bg-gray-100 items-center justify-center rounded-md">
                        <span className="text-gray-400 text-xl">📦</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.name}
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-500">
                          SL: {item.quantity}
                        </span>
                        <span className="text-sm font-semibold text-gray-800">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Mã khuyến mại
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Áp dụng
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                  <span>Tổng cộng:</span>
                  <span className="text-green-600">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

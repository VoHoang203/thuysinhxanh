import React from "react";
import { Link, useLocation } from "react-router-dom";

const CheckoutSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Không tìm thấy thông tin đơn hàng
          </h2>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Đặt hàng thành công!
          </h1>
          <p className="text-gray-600">
            Cảm ơn bạn đã mua hàng tại Thủy Sinh Xanh
          </p>
        </div>

        {/* Order Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">
                Thông tin đơn hàng
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mã đơn hàng:</span>
                  <span className="font-medium">{order.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ngày đặt:</span>
                  <span>
                    {new Date(order.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng tiền:</span>
                  <span className="font-medium text-green-600">
                    {formatPrice(order.total)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">
                Thông tin giao hàng
              </h3>
              <div className="space-y-1 text-sm">
                <p className="font-medium">{order.customerInfo.fullName}</p>
                <p className="text-gray-600">{order.customerInfo.phone}</p>
                {order.customerInfo.email && (
                  <p className="text-gray-600">{order.customerInfo.email}</p>
                )}
                <p className="text-gray-600">
                  {order.customerInfo.address}
                  {order.customerInfo.ward && `, ${order.customerInfo.ward}`}
                  {order.customerInfo.district &&
                    `, ${order.customerInfo.district}`}
                  {order.customerInfo.city && `, ${order.customerInfo.city}`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="font-medium text-gray-900 mb-4">Sản phẩm đã đặt</h3>
          <div className="divide-y divide-gray-200">
            {order.items.map((item) => (
              <div key={item.id} className="py-4 flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    Số lượng: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatPrice(item.price)}/sản phẩm
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="font-medium text-blue-900 mb-3">Bước tiếp theo</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p>
              • Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận đơn hàng
            </p>
            <p>• Đơn hàng sẽ được chuẩn bị và giao trong 2-3 ngày làm việc</p>
            <p>• Bạn sẽ nhận được thông báo khi đơn hàng được giao</p>
            {order.paymentMethod === "bank" && (
              <p>
                • Vui lòng chuyển khoản theo thông tin chúng tôi sẽ gửi qua tin
                nhắn
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-200"
          >
            Tiếp tục mua sắm
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
          >
            Về trang chủ
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Cần hỗ trợ? Liên hệ với chúng tôi:</p>
          <div className="mt-2 space-x-4">
            <a href="tel:0865313256" className="text-green-600 hover:underline">
              📞 0865313256 (HN)
            </a>
            <a href="tel:0785111988" className="text-green-600 hover:underline">
              📞 0785111988 (HCM)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

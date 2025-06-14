import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import useCartStore from "../store/useCartStore";

const CartPage = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              Trang chủ
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Giỏ hàng</span>
          </nav>

          {/* Empty cart */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Không có sản phẩm nào trong giỏ hàng.
            </h2>
            <p className="text-gray-600 mb-8">
              Quay lại{" "}
              <Link
                to="/products"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                cửa hàng
              </Link>{" "}
              để tiếp tục mua sắm.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-green-600 hover:text-green-700">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">Giỏ hàng</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    Giỏ hàng ({getTotalItems()} sản phẩm)
                  </h1>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Xóa tất cả
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 flex-shrink-0">
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
                          <span className="text-gray-400 text-2xl">📦</span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/products/${item.id}`}
                          className="text-lg font-medium text-gray-800 hover:text-green-600 line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          Danh mục: {item.category}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-semibold text-green-600">
                            {formatPrice(item.price)}
                          </span>
                          {item.originalPrice &&
                            item.originalPrice > item.price && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                {formatPrice(item.originalPrice)}
                              </span>
                            )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 min-w-[60px] text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right min-w-[100px]">
                          <div className="text-lg font-semibold text-gray-800">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/products"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Đơn hàng ({getTotalItems()} sản phẩm)
              </h3>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển:</span>
                  <span className="text-green-600">Miễn phí</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      Tổng cộng:
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block mb-6"
              >
                ĐẶT HÀNG
              </Link>

              {/* Policies */}
              <div className="text-sm text-gray-500 space-y-2 mb-6">
                <p>✓ Miễn phí vận chuyển toàn quốc</p>
                <p>✓ Thanh toán khi nhận hàng (COD)</p>
                <p>✓ Đổi trả trong 7 ngày</p>
                <p>✓ Cam kết sản phẩm chính hãng</p>
              </div>

              {/* Contact */}
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Cần hỗ trợ?
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Liên hệ với chúng tôi để được tư vấn miễn phí
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-green-600 font-medium">
                    📞 HN: 0865313256
                  </p>
                  <p className="text-green-600 font-medium">
                    📞 HCM: 0785111988
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

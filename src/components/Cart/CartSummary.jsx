import React from "react";
import useCartStore from "../../store/useCartStore";

const CartSummary = ({ showTitle = true }) => {
  const { items, getTotalPrice, getTotalItems } = useCartStore();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 500000 ? 0 : 30000; // Miễn phí vận chuyển cho đơn hàng > 500k
  const total = subtotal + shipping;

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      {showTitle && (
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Tóm tắt đơn hàng
        </h3>
      )}

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Tạm tính ({getTotalItems()} sản phẩm)
          </span>
          <span className="text-gray-900">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Phí vận chuyển</span>
          <span className="text-gray-900">
            {shipping === 0 ? (
              <span className="text-green-600 font-medium">Miễn phí</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>

        {subtotal < 500000 && shipping > 0 && (
          <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
            Mua thêm {formatPrice(500000 - subtotal)} để được miễn phí vận
            chuyển
          </div>
        )}

        <div className="border-t border-gray-200 pt-2 mt-3">
          <div className="flex justify-between text-base font-medium">
            <span className="text-gray-900">Tổng cộng</span>
            <span className="text-green-600 font-semibold">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;

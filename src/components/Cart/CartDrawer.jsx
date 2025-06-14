import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartDrawer = () => {
  const { items, isOpen, closeCart, clearCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Giỏ hàng ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15.5M7 13h10m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                Giỏ hàng trống
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Hãy thêm sản phẩm vào giỏ hàng
              </p>
              <div className="mt-6">
                <Link
                  to="/products"
                  onClick={closeCart}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Mua sắm ngay
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-gray-200 p-4 space-y-4">
              <CartSummary showTitle={false} />

              <div className="space-y-2">
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-200 flex items-center justify-center"
                >
                  Thanh toán
                </Link>

                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition duration-200 flex items-center justify-center"
                >
                  Xem giỏ hàng
                </Link>

                <button
                  onClick={clearCart}
                  className="w-full text-red-600 py-2 px-4 rounded-lg font-medium hover:bg-red-50 transition duration-200"
                >
                  Xóa tất cả
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

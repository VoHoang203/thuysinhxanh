import React from "react";
import useCartStore from "../../store/useCartStore";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, parseInt(newQuantity));
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <div className="flex-shrink-0">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">
          {item.name}
        </h4>
        <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
        {item.discount > 0 && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
            -{item.discount}%
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            className="w-12 text-center border-0 focus:ring-0"
            min="1"
          />
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 p-1"
          title="Xóa sản phẩm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="text-sm font-medium text-gray-900">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default CartItem;

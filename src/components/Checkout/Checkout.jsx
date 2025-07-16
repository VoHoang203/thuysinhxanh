import { useState, useMemo } from "react";
import { CircleHelp } from "lucide-react";
import { Link } from "react-router";

// NOTE: In a real application, this data should come from your global state
// management (Context, Zustand, etc.) instead of being duplicated here.
const initialProducts = [
  {
    id: 1,
    name: "Máy Lọc Treo Xiaoli Sunsun XBL",
    model: "XBL-300",
    price: 240000,
    quantity: 1,
    image: "/placeholder.svg?width=64&height=64",
  },
  {
    id: 2,
    name: "Thức Ăn Viên Dán Luxury Mix",
    model: "",
    price: 69000,
    quantity: 1,
    image: "/placeholder.svg?width=64&height=64",
  },
];

function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

export default function Checkout() {
  // This state is for demonstration. In a real app, get cartItems from a global store.
  const [cartItems] = useState(initialProducts);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <main className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Column: Shipping and Payment */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Thông tin nhận hàng</h2>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <input
            type="email"
            placeholder="Email (tùy chọn)"
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <select className="w-full p-3 border rounded-md bg-white text-gray-500 focus:ring-blue-500 focus:border-blue-500">
            <option>Tỉnh thành</option>
          </select>
          <select className="w-full p-3 border rounded-md bg-white text-gray-500 focus:ring-blue-500 focus:border-blue-500">
            <option>Quận huyện</option>
          </select>
          <select className="w-full p-3 border rounded-md bg-white text-gray-500 focus:ring-blue-500 focus:border-blue-500">
            <option>Phường xã</option>
          </select>
          <textarea
            placeholder="Ghi chú (tùy chọn)"
            rows="3"
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">Thanh toán</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-500">
          <label className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="form-radio text-blue-500 h-5 w-5"
              />
              <span>Thanh toán khi giao hàng (COD)</span>
            </div>
            <CircleHelp className="w-6 h-6 text-gray-400" />
          </label>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-4 border-b pb-4">
          Đơn hàng ({cartItems.length} sản phẩm)
        </h2>
        <div className="space-y-4 max-h-60 overflow-y-auto py-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.model}</p>
                </div>
              </div>
              <p className="font-medium">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 mt-4 flex gap-3">
          <input
            type="text"
            placeholder="Nhập mã giảm giá"
            className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            className="px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            disabled
          >
            Áp dụng
          </button>
        </div>
        <div className="border-t pt-4 mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Tạm tính</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>-</span>
          </div>
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Tổng cộng</span>
            <span className="text-2xl text-blue-500">
              {formatCurrency(subtotal)}
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <Link href="/cart" className="text-blue-500 hover:underline">
            &lt; Quay về giỏ hàng
          </Link>
          <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
            ĐẶT HÀNG
          </button>
        </div>
      </div>
    </main>
  );
}

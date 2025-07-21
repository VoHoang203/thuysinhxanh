import { useState, useMemo } from "react";
import { CircleHelp } from "lucide-react";
import { Link } from "react-router";
import useCartStore from "../../store/useCartStore";
import { useAuth } from "../../context/app.context";
import { formatCurrency } from "../../utils/lib";



export default function Checkout() {
  const { items: cartItems, clearCart  } = useCartStore();
  const { user } = useAuth();
  const [email,setEmail ]=useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phoneNumber);
  const [address, setAddress] = useState(user.address);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const handlePlaceOrder = async () => {
    if (!name || !phone || !address) {
      alert("Vui lòng điền đầy đủ thông tin nhận hàng.");
      return;
    }

    try {
      const resOrder = await fetch("http://localhost:9999/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          totalPrice: subtotal,
          status: "pending",
          address,
          createdAt: new Date().toISOString(),
        }),
      });

      if (!resOrder.ok) throw new Error("Tạo đơn hàng thất bại.");

      const order = await resOrder.json();

      await Promise.all(
        cartItems.map((item) =>
          fetch("http://localhost:9999/orderItems", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: order.id,
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            }),
          })
        )
      );

      alert("Đặt hàng thành công!");
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Lỗi khi đặt hàng.");
    }
  };

  return (
    <main className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

      <div>
        <h2 className="text-xl font-semibold mb-4">Thông tin nhận hàng</h2>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <input
            type="email"
            placeholder="Email (tùy chọn)"
            className="w-full p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full p-3 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full p-3 border rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            className="w-full p-3 border rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <textarea
            placeholder="Ghi chú (tùy chọn)"
            rows="3"
            className="w-full p-3 border rounded-md"
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

      {/* Right: Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-4 border-b pb-4">
          Đơn hàng ({cartItems.length} sản phẩm)
        </h2>
        <div className="space-y-4 max-h-60 overflow-y-auto py-4">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between"
            >
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
                  <p className="text-sm text-gray-500">{item.model || ""}</p>
                </div>
              </div>
              <p className="font-medium">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))}
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
          <Link to="/cart" className="text-blue-500 hover:underline">
            &lt; Quay về giỏ hàng
          </Link>
          <button
            onClick={handlePlaceOrder}
            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
          >
            ĐẶT HÀNG
          </button>
        </div>
      </div>
    </main>
  );
}

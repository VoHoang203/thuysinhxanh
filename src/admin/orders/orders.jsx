"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { X } from "lucide-react"
import { formatCurrency } from "../../utils/lib"

const API_URL = "http://localhost:9999"

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "processing":
      return "bg-blue-100 text-blue-800"
    case "shipped":
      return "bg-indigo-100 text-indigo-800"
    case "delivered":
      return "bg-purple-100 text-purple-800"
    case "completed":
      return "bg-green-100 text-green-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const OrderStatusTimeline = ({ currentStatus }) => {
  const steps = ["pending", "processing", "shipped", "delivered", "completed"]
  const current = steps.indexOf(currentStatus.toLowerCase())

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex-1 flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${index <= current ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>
            {index + 1}
          </div>
          <span className={`text-sm font-medium 
            ${index <= current ? "text-gray-800" : "text-gray-400"}`}>
            {step.charAt(0).toUpperCase() + step.slice(1)}
          </span>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 
              ${index < current ? "bg-blue-600" : "bg-gray-200"}`}></div>
          )}
        </div>
      ))}
    </div>
  )
}

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Order: {order.id}</h2>
            <p className="text-sm text-gray-500">{order.time} {order.date}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusClass(order.status)}`}>
              {order.status}
            </span>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <OrderStatusTimeline currentStatus={order.status} />

          <div className="p-4 border rounded-lg space-y-2">
            <h3 className="font-semibold">Order Items</h3>
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt="" className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">x{item.quantity}</p>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Summary</h3>
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>{formatCurrency(order.summary.subtotal)} VNĐ
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Shipping</p>
              <p>${order.summary.shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>{formatCurrency(order.summary.total)}</p>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Customer</h3>
            <p>{order.customer.name}</p>
            <p>{order.customer.email}</p>
            <p>{order.customer.phone}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <p>{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.address}</p>
            <p>{order.shippingAddress.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const fetchOrders = async () => {
    try {
      const [ordersRes, itemsRes, usersRes] = await Promise.all([
        axios.get(`${API_URL}/orders`),
        axios.get(`${API_URL}/orderItems`),
        axios.get(`${API_URL}/users`)
      ])

      const ordersData = ordersRes.data
      const items = itemsRes.data
      const users = usersRes.data

      const formatted = ordersData.map((order) => {
        const orderItems = items.filter(i => `${i.orderId}` === `${order.id}`)
        const user = users.find(u => u.id === order.userId)

        const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        const shipping = 50000
        const total = subtotal + shipping

        return {
          id: order.id,
          date: new Date(order.createdAt).toLocaleDateString("vi-VN"),
          time: new Date(order.createdAt).toLocaleTimeString("vi-VN"),
          status: order.status,
          items: orderItems.map(item => ({
            name: `Product ${item.productId || item.fishId}`,
            color: "N/A",
            image: "/placeholder.svg",
            quantity: item.quantity,
            price: item.price
          })),
          summary: { subtotal, shipping, total },
          customer: {
            name: user?.name || "Unknown",
            email: user?.email || "N/A",
            phone: user?.phone || "N/A"
          },
          shippingAddress: {
            name: user?.name || "Unknown",
            address: order.address,
            phone: user?.phone || "N/A"
          }
        }
      })

      setOrders(formatted)
    } catch (err) {
      console.error("Failed to fetch orders", err)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const openModal = (order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedOrder(null)
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Orders</h2>
          <p className="text-sm text-gray-500">Manage customer orders.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{order.id}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">{order.customer.name}</td>
                  <td className="px-4 py-2">${order.summary.total.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openModal(order)}
                      className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-400">No orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && <OrderDetailsModal order={selectedOrder} onClose={closeModal} />}
    </>
  )
}

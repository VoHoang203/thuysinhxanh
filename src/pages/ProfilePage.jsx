import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    fullName: "Nguyễn Văn An",
    email: "nguyenvanan@email.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    avatar: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...user });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editData });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const orderHistory = [
    {
      id: "DH001",
      date: "2024-01-15",
      total: 1250000,
      status: "Đã giao",
    },
    {
      id: "DH002",
      date: "2024-01-10",
      total: 850000,
      status: "Đang giao",
    },
    {
      id: "DH003",
      date: "2024-01-05",
      total: 450000,
      status: "Đã hủy",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Đã giao":
        return "text-green-600 bg-green-100";
      case "Đang giao":
        return "text-blue-600 bg-blue-100";
      case "Đã hủy":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              Thông tin cá nhân
            </h1>
          </div>

          {/* Profile Info */}
          <div className="px-6 py-6">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gray-600">👤</span>
              </div>
              <div className="ml-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.fullName}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={editData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="py-2 text-gray-900">{user.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="py-2 text-gray-900">{user.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="py-2 text-gray-900">{user.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="py-2 text-gray-900">{user.address}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Lưu thay đổi
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Chỉnh sửa
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="bg-white shadow rounded-lg mt-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Lịch sử đơn hàng
            </h2>
          </div>
          <div className="px-6 py-6">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Mã đơn hàng
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Ngày đặt
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Tổng tiền
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-blue-600 font-medium">
                        {order.id}
                      </td>
                      <td className="py-3 px-4 text-gray-900">{order.date}</td>
                      <td className="py-3 px-4 text-gray-900">
                        {order.total.toLocaleString("vi-VN")}đ
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

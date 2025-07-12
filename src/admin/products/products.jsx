import { useState } from "react";
import EditProductModal from "../components/edit-product";

const products = [
  {
    id: "1",
    name: "Cá Betta Rồng Đen",
    image: "/placeholder.svg?width=40&height=40",
    price: 15,
    discount: 30,
    stock: 49,
    category: "Betta",
    status: true,
  },
  {
    id: "2",
    name: "Cá Vàng Oranda",
    image: "/placeholder.svg?width=40&height=40",
    price: 25,
    discount: 0,
    stock: 44,
    category: "Cá Vàng",
    status: true,
  },
  {
    id: "3",
    name: "Cá Bảy Màu Full Gold",
    image: "/placeholder.svg?width=40&height=40",
    price: 16,
    discount: 30,
    stock: 48,
    category: "Guppy",
    status: true,
  },
];

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tmpProducts, setProducts] = useState(products);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveProduct = (updatedProduct) => {
    setProducts(
      tmpProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    handleCloseModal();
  };
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Product Management</h2>
          <p className="text-sm text-gray-500">
            Manage your ornamental fish products.
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              placeholder="Search product..."
              className="w-80 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
              <option>All Categories</option>
              <option>Betta</option>
              <option>Cá Vàng</option>
              <option>Guppy</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            Add New
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Discount</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tmpProducts.map((product, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">{product.price} VNĐ</td>
                  <td className="px-6 py-4">{product.discount}%</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-100"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <EditProductModal product={selectedProduct} onClose={handleCloseModal} onSave={handleSaveProduct} />
      )}
    </>
  );
}

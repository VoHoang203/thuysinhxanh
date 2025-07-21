"use client";
import { useEffect, useState } from "react";
import { X, Trash2 } from "lucide-react";


const ToggleSwitch = ({ label, enabled, setEnabled }) => (
  <div className="flex items-center">
    <label className="text-sm font-medium text-gray-700 mr-4">{label}</label>
    <button
      type="button"
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
      onClick={() => setEnabled(!enabled)}
    >
      <span
        className={`${
          enabled ? "translate-x-5" : "translate-x-0"
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  </div>
);


const ProductModal = ({ product, onClose, onSave, isEditMode, categories }) => {
  const [formData, setFormData] = useState(product);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    const newUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...newUrls] }));
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: url }));
    }
  };

  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">{isEditMode ? "Edit Product" : "Add New Product"}</h2>
          <button onClick={onClose} className="absolute top-6 right-6 p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh đại diện</label>
            {formData.image && <img src={formData.image} alt="Main" className="h-24 w-24 object-cover rounded mb-2" />}
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:bg-blue-50 file:text-blue-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh sản phẩm (nhiều)</label>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {formData.images.map((img, index) => (
                <div key={index} className="relative group">
                  <img src={img} className="w-full h-24 object-cover rounded-md border" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:bg-blue-50 file:text-blue-700"
            />
          </div>
          <ToggleSwitch
            label="Tình trạng (Bán / Ẩn)"
            enabled={formData.status}
            setEnabled={(val) => setFormData((prev) => ({ ...prev, status: val }))}
          />
          <div className="pt-6 border-t flex justify-end gap-4 sticky bottom-0 bg-white py-4 px-6 -mx-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default function ProductsPage2() {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const newProductTemplate = {
    id: null,
    name: "",
    image: "",
    images: [],
    price: 0,
    discount: 0,
    category: "",
    description: "",
    status: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      const [res1, res2] = await Promise.all([
        fetch("http://localhost:9999/products"),
        fetch("http://localhost:9999/productCategories"),
      ]);
      const products = await res1.json();
      const categories = await res2.json();
      setProductList(products);
      setCategories(categories.map((c) => c.name));
    };
    fetchData();
  }, []);

  const handleOpenAddModal = () => {
    setIsEditMode(false);
    setSelectedProduct(newProductTemplate);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setIsEditMode(true);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveProduct = async (productData) => {
    if (isEditMode) {
      await fetch(`http://localhost:9999/products/${productData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      setProductList(productList.map((p) => (p.id === productData.id ? productData : p)));
    } else {
      const res = await fetch("http://localhost:9999/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      const newProduct = await res.json();
      setProductList([newProduct, ...productList]);
    }
    handleCloseModal();
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Product Management</h2>
          <p className="text-sm text-gray-500">Manage your fish store inventory.</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <input placeholder="Search product..." className="w-80 border border-gray-300 rounded-md px-3 py-2 text-sm" />
          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
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
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.status ? "On Sale" : "Hidden"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleOpenEditModal(product)}
                      className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-100"
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
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onSave={handleSaveProduct}
          isEditMode={isEditMode}
          categories={categories}
        />
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { formatCurrency } from "../../utils/lib";
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
const newProductTemplate = {
  name: "",
  image: "/placeholder.svg?width=96&height=96",
  images: [],
  price: 0,
  discount: 0,
  stock: 0,
  rating: 0,
  category: 1,
  description: "",
  status: true,
  ban: false,
  reviews: [],
};
export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tmpProducts, setProducts] = useState(products);
  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleSaveProduct = async (product, isEditMode) => {
    try {
      if (isEditMode) {
        const res = await fetch(`http://localhost:9999/fish/${product.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });

        if (res.ok) {
          const updated = await res.json();
          setProducts((prev) =>
            prev.map((p) => (p.id === updated.id ? updated : p))
          );
        }
      } else {
        const res = await fetch("http://localhost:9999/fish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });

        if (res.ok) {
          const created = await res.json();
          setProducts((prev) => [...prev, created]);
        }
      }

      handleCloseModal();
    } catch (error) {
      console.error("Save failed", error);
    }
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resFish = await fetch("http://localhost:9999/fish");
      const resCats = await fetch("http://localhost:9999/fishCategories");

      const fishData = await resFish.json();
      const catData = await resCats.json();

      setProducts(fishData);
      setCategories(catData);
    };
    fetchData();
  }, []);
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
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => handleOpenAddModal()}
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
                      src={product.image}
                      onError={(e) => (e.target.src = "/placeholder.svg")}
                      alt={product.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {formatCurrency(product.price)} VNĐ
                  </td>
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
                      onClick={() => handleOpenEditModal(product)}
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
        <EditProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onSave={handleSaveProduct}
          categories={categories}
          isEditMode={isEditMode}
        />
      )}
    </>
  );
}
const ToggleSwitch = ({ label, enabled, setEnabled }) => (
  <div className="flex items-center">
    <label className="text-sm font-medium text-gray-700 mr-4">{label}</label>
    <button
      type="button"
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
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

function EditProductModal({
  product,
  onClose,
  onSave,
  isEditMode,
  categories,
}) {
  const [formData, setFormData] = useState(product);
  const [imagePreview, setImagePreview] = useState(product.image);
  

  useEffect(() => {
    setFormData(product);
    setImagePreview(product.image);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "socail");
    formData.append("folder", "uploads");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dzcj2jbii/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.secure_url) {
        setImagePreview(data.secure_url); 
        setFormData((prev) => ({ ...prev, image: data.secure_url })); 
      }
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };
  const handleMultipleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedURLs = [];

    for (const file of files) {
      const formDataCloud = new FormData();
      formDataCloud.append("file", file);
      formDataCloud.append("upload_preset", "socail");
      formDataCloud.append("folder", "uploads");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dzcj2jbii/image/upload",
          {
            method: "POST",
            body: formDataCloud,
          }
        );

        const data = await res.json();
        if (data.secure_url) {
          uploadedURLs.push(data.secure_url);
        }
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }


    setFormData((prev) => ({
      ...prev,
      images: [...(prev.images || []), ...uploadedURLs],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, isEditMode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">
              {isEditMode ? "Edit Product" : "Add New Product"}
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Giá
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Discount (%)
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ảnh sản phẩm
            </label>
            <div className="flex items-center gap-4">
              {imagePreview && (
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-24 h-24 rounded-md object-cover border"
                />
              )}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ảnh phụ (Images)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleMultipleImageUpload}
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.images?.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Sub image ${idx}`}
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>
          <ToggleSwitch
            label="Tình trạng (Bán / Ẩn)"
            enabled={formData.status}
            setEnabled={(value) =>
              setFormData((prev) => ({ ...prev, status: value }))
            }
          />

          <div className="pt-6 border-t flex justify-end gap-4 sticky bottom-0 bg-white py-4 px-6 -mx-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

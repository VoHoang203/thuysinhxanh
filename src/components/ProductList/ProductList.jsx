import React, { useState, useEffect } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import productsData from "../../data/products.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const { addItem, getItemCount } = useCartStore();

  useEffect(() => {
    setProducts(productsData.products);
    setFilteredProducts(productsData.products);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under-100k":
          filtered = filtered.filter((product) => product.price < 100000);
          break;
        case "100k-500k":
          filtered = filtered.filter(
            (product) => product.price >= 100000 && product.price < 500000
          );
          break;
        case "500k-1m":
          filtered = filtered.filter(
            (product) => product.price >= 500000 && product.price < 1000000
          );
          break;
        case "over-1m":
          filtered = filtered.filter((product) => product.price >= 1000000);
          break;
        default:
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, selectedCategory, priceRange, sortBy]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 sticky top-4">
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Danh mục</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === "all"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm">Tất cả</span>
                </label>
                {productsData.categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Khoảng giá</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value="all"
                    checked={priceRange === "all"}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm">Tất cả</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value="under-100k"
                    checked={priceRange === "under-100k"}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm">Dưới 100.000₫</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value="100k-500k"
                    checked={priceRange === "100k-500k"}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm">100.000₫ - 500.000₫</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value="500k-1m"
                    checked={priceRange === "500k-1m"}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm">500.000₫ - 1.000.000₫</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value="over-1m"
                    checked={priceRange === "over-1m"}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm">Trên 1.000.000₫</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Sản phẩm thủy sinh
              </h1>
              <p className="text-gray-600">
                Hiển thị {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, filteredProducts.length)}
                trong tổng số {filteredProducts.length} sản phẩm
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="default">Sắp xếp theo</option>
                <option value="name">Tên A-Z</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="price-high">Giá cao đến thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-medium">Hết hàng</span>
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-green-600 font-semibold text-sm">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-500 line-through ml-1">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {product.inStock && (
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="relative bg-green-600 text-white p-1.5 rounded-lg hover:bg-green-700 transition-colors"
                        title="Thêm vào giỏ hàng"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        {getItemCount(product.id) > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {getItemCount(product.id)}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trước
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 &&
                    pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`px-3 py-2 text-sm rounded-lg ${
                        currentPage === pageNumber
                          ? "bg-green-600 text-white"
                          : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span key={pageNumber} className="px-1 text-gray-500">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

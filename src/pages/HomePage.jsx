import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  const featuredCategories = [
    {
      title: "PRODAC - ITALIA",
      description: "Thức ăn cá cảnh chính hãng, chất lượng hàng đầu Italy",
      image:
        "https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/category_1_image.png?1730118464073",
      link: "/products?category=prodac",
    },
    {
      title: "TOP SẢN PHẨM BÁN CHẠY",
      description: "Những sản phẩm được khách hàng yêu thích nhất",
      image:
        "https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/category_1_image.png?1730118464073",
      link: "/products?featured=true",
    },
    {
      title: "Sản phẩm mới",
      description: "Cập nhật những sản phẩm mới nhất",
      image:
        "https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/category_2_image.png?1730118464073",
      link: "/products?new=true",
    },
    {
      title: "Phân nền, Cốt nền Thủy Sinh",
      description: "Phân nền chất lượng cao cho bể thủy sinh",
      image:
        "https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/category_3_image.png?1730118464073",
      link: "/products?category=phan-nen",
    },
  ];

  const topProducts = [
    {
      id: 1,
      name: "Máy Lọc Treo Xiaoli Sunsun XBL",
      price: 240000,
      originalPrice: 270000,
      discount: 11,
      image: "/placeholder-product.jpg",
    },
    {
      id: 2,
      name: "Thức Ăn Viên Dán Luxury Mix",
      price: 69000,
      originalPrice: null,
      discount: null,
      image: "/placeholder-product.jpg",
    },
    {
      id: 3,
      name: "Cám Tép Cao Cấp V-Mix Pro",
      price: 79000,
      originalPrice: 85000,
      discount: 7,
      image: "/placeholder-product.jpg",
    },
    {
      id: 4,
      name: "Chế Phẩm Sinh Học Extrabio 250ml",
      price: 85000,
      originalPrice: null,
      discount: null,
      image: "/placeholder-product.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="mb-8">
        <Carousel />
      </section>

      {/* Service promises */}
      <section className="bg-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                GIAO HÀNG TẬN NƠI
              </h3>
              <p className="text-sm text-gray-600">
                Liên kết với các đơn vị vận chuyển uy tín, đảm bảo giao hàng
                nhanh chóng
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">💳</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                THANH TOÁN TIỆN LỢI
              </h3>
              <p className="text-sm text-gray-600">
                Hỗ trợ thanh toán tiền mặt hoặc thẻ từ các ngân hàng
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                CHĂM SÓC 24/7
              </h3>
              <p className="text-sm text-gray-600">
                Chăm sóc khách hàng 24/7. Giải đáp mọi thắc mắc
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                SẢN PHẨM CHÍNH HÃNG
              </h3>
              <p className="text-sm text-gray-600">
                Sản phẩm chính hãng đến từ các thương hiệu uy tín
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-full bg-green-100 items-center justify-center">
                  <span className="text-green-600 text-4xl">🌱</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Products Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            TOP SẢN PHẨM BÁN CHẠY
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group block"
              >
                <div className="bg-gray-100 aspect-square rounded-lg mb-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full bg-green-100 items-center justify-center">
                    <span className="text-green-600 text-2xl">�</span>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-600">
                    {product.price.toLocaleString("vi-VN")}₫
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice.toLocaleString("vi-VN")}₫
                      </span>
                      {product.discount && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                          -{product.discount}%
                        </span>
                      )}
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            TIN NỔI BẬT
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blogs/1" className="group">
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-3xl">📖</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                Cách Điều Chỉnh pH Cho Hồ Thủy Sinh Hiệu Quả Và An Toàn
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                Độ pH là một khái niệm mà chắc hẳn ai cũng đã từng một lần nghe
                qua, đặc biệt đối với những người chơi thủy sinh...
              </p>
            </Link>
            <Link to="/blogs/2" className="group">
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-3xl">🌿</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                Bí Quyết Chữa Bệnh Ráy Thủy Sinh Bị Rữa
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                Bệnh rữa, thối nhũn thân lá là một bệnh phổ biến thường xuyên
                hay gặp ở cây ráy...
              </p>
            </Link>
            <Link to="/blogs/3" className="group">
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">🐠</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                Top 5 loài cá cảnh bơi theo đàn thả hồ thủy sinh đẹp nhất
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                Các loài cá cảnh bơi theo đàn làm hồ thủy sinh của bạn trở nên
                cực kỳ sinh động...
              </p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blogs"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Xem tất cả tin tức
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

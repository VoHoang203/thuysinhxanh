import React, { useEffect, useState } from "react";
import ThuySinhCarousel from "../Carousel/Carousel";
import axios from "axios";
import {
  CreditCard,
  Headset,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProductCard from "../ProductCart";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:9999/fish");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  console.log(products);
  useEffect(() => {
    getProduct();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const getSortedProducts = (type) => {
  switch (type) {
    case "rating":
      return [...products].sort((a, b) => b.rating - a.rating);
    case "price":
      return [...products].sort((a, b) => a.price - b.price);
    case "discount":
      return [...products].sort((a, b) => b.discountPercentage - a.discountPercentage);
    default:
      return products;
  }
};

  return (
    <div>
      <div className="mb-8">
        <ThuySinhCarousel />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center">
        <div className="flex flex-col items-center">
          <Truck size={40} className="text-red-600 mb-2" />
          <h3 className="font-bold">GIAO HÀNG TẬN NƠI</h3>
          <p className="text-sm text-gray-600">
            Liên kết với các đơn vị vận chuyển uy tín, đảm bảo
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CreditCard size={40} className="text-red-600 mb-2" />
          <h3 className="font-bold">THANH TOÁN TIỆN LỢI</h3>
          <p className="text-sm text-gray-600">
            Hỗ trợ thanh toán tiền mặt hoặc thẻ từ các ngân hàng
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Headset size={40} className="text-red-600 mb-2" />
          <h3 className="font-bold">CHĂM SÓC 24/7</h3>
          <p className="text-sm text-gray-600">
            Chăm sóc khách hàng 24/7. Giải đáp mọi thắc mắc
          </p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck size={40} className="text-red-600 mb-2" />
          <h3 className="font-bold">SẢN PHẨM CHÍNH HÃNG</h3>
          <p className="text-sm text-gray-600">
            Sản phẩm chính hãng đến từ các thương hiệu uy tín
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <div className="bg-blue-500 text-white py-2 px-4 mb-4 flex items-center gap-2 uppercase font-bold text-sm">
            Top Đánh Giá Tốt
          </div>
          {renderCarousel(getSortedProducts("rating"), "carouselRating")}
        </section>

        <section>
          <div className="bg-blue-500 text-white py-2 px-4 mb-4 flex items-center gap-2 uppercase font-bold text-sm">
            Giá Rẻ Nhất
          </div>
          {renderCarousel(getSortedProducts("price"), "carouselPrice")}
        </section>

        <section>
          <div className="bg-blue-500 text-white py-2 px-4 mb-4 flex items-center gap-2 uppercase font-bold text-sm">
            Giảm Giá Mạnh Nhất
          </div>
          {renderCarousel(getSortedProducts("discount"), "carouselDiscount")}
        </section>
      </div>
    </div>
  );
}
const renderCarousel = (products, carouselId) => {
  const groupSize = 5;
  const groups = Array.from({ length: Math.ceil(products.length / groupSize) });

  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {groups.map((_, index) => {
          const productGroup = products.slice(index * groupSize, index * groupSize + groupSize);
          return (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="flex -ml-4">
                {productGroup.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 pl-4"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-blue-500" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-blue-500" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
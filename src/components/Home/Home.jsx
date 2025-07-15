import React, { useEffect, useState} from "react";
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
      const response = await axios.get("http://localhost:9999/fish?_limit=7");
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
  return (
    <div>
      <div className="mb-8">
        <ThuySinhCarousel />
      </div>
      {/* Cham soc khach hang */}
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
       {/* Product Sections */}
        <div className="space-y-12">
      <section>
        <div className="bg-blue-500 text-white py-2 px-4 mb-4 flex items-center gap-2 uppercase font-bold text-sm">
          TOP SẢN PHẨM BÁN CHẠY
        </div>
        <div
          id="productCarousel1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(products.length / 5) }).map(
              (_, index) => {
                const productGroup = products.slice(index * 5, index * 5 + 5); 

                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
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
              }
            )}
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#productCarousel1"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-blue-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel1"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-blue-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div className="bg-blue-500 text-white py-2 px-4 mb-4 flex items-center gap-2 uppercase font-bold text-sm">
          TOP SẢN PHẨM BÁN CHẠY
        </div>
        <div
          id="productCarousel2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(products.length / 5) }).map(
              (_, index) => {
                const productGroup = products.slice(index * 5, index * 5 + 5); 

                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
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
              }
            )}
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#productCarousel2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-blue-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-blue-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div className="bg-blue-500 text-white py-2 px-4 mb-4 flex items-center gap-2 uppercase font-bold text-sm">
          TOP SẢN PHẨM BÁN CHẠY
        </div>
        <div
          id="productCarousel3"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {Array.from({ length: Math.ceil(products.length / 5) }).map(
              (_, index) => {
                const productGroup = products.slice(index * 5, index * 5 + 5); 

                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
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
              }
            )}
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#productCarousel3"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-blue-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel3"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-blue-500"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      </div>
    </div>
  );
}

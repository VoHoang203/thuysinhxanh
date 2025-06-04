
import {Link} from "react-router"
import { useState } from "react"
import { ChevronRight, ShoppingCart, Truck, CreditCard, ShieldCheck, Minus, Plus } from "lucide-react"

const productImages = [
  { id: 1, src: "/placeholder.svg?width=600&height=600", alt: "Main filter view" },
  { id: 2, src: "/placeholder.svg?width=100&height=100", alt: "Filter side view" },
  { id: 3, src: "/placeholder.svg?width=100&height=100", alt: "Filter parts" },
  { id: 4, src: "/placeholder.svg?width=100&height=100", alt: "Filter angle view" },
  { id: 5, src: "/placeholder.svg?width=100&height=100", alt: "Filter in use" },
  { id: 6, src: "/placeholder.svg?width=100&height=100", alt: "Filter packaging" },
]

const sizes = ["PX-10", "PX-15", "PX-20"]

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(productImages[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount))
  }

  return (
    <div className="bg-white p-4 md:p-6">
      <div className="container mx-auto">
        <div className="mb-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-red-600">
            Trang chủ
          </Link>
          <ChevronRight className="inline-block w-3 h-3 mx-1" />
          <Link to="/product-list-page" className="hover:text-red-600">
            Phụ Kiện Thủy Sinh Khác
          </Link>
          <ChevronRight className="inline-block w-3 h-3 mx-1" />
          <span>Máy Lọc Thùng Haiyang Tích Hợp Tách Cặn Bẩn</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={600}
                height={600}
                className="w-full h-auto object-contain aspect-square"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {productImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`block border-2 rounded-md overflow-hidden ${
                    selectedImage.id === img.id ? "border-red-500" : "border-transparent"
                  } hover:border-red-400 transition-all focus:outline-none focus:ring-2 focus:ring-red-500`}
                >
                  <image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    width={80}
                    height={80}
                    className="object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Máy Lọc Thùng HaiYang Tích Hợp Tách Cặn Bẩn
            </h1>
            <div className="text-sm text-gray-500 mb-1">
              Mã Sản Phẩm: <span className="text-gray-700">PVN6438</span>
            </div>
            <div className="text-sm text-gray-500 mb-1">
              Loại: <span className="text-gray-700">Đồ Điện</span>
            </div>
            <div className="text-sm text-gray-500 mb-1">
              Hãng: <span className="text-gray-700">Nhập Khẩu</span>
            </div>
            <div className="text-sm text-gray-500 mb-1">
              Bảo hành: <span className="text-gray-700">1 tháng</span>
            </div>
            <div className="text-sm text-gray-500 mb-3">
              Kho: <span className="text-green-600 font-medium">Còn hàng (2)</span>
            </div>

            <div className="text-3xl font-bold text-red-600 mb-4">1.600.000₫</div>

            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Kích thước</label>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors
                      ${
                        selectedSize === size
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white text-red-600 border-red-500 hover:bg-red-50"
                      }
                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="text-sm font-medium text-gray-700 mb-1 block">
                Số lượng
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 border border-red-500 text-red-500 rounded-l-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-t border-b border-red-500 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 border border-red-500 text-red-500 rounded-r-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="flex-grow px-6 py-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center">
                <ShoppingCart className="mr-2 h-5 w-5" /> MUA NGAY
              </button>
              <button className="flex-grow px-6 py-3 border border-red-600 text-red-600 rounded-md font-semibold hover:bg-red-50 hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 flex items-center justify-center">
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">GIỚI THIỆU SẢN PHẨM</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lọc thùng Haiyang là một trong những dòng lọc ngoài được ưa chuộng trong giới chơi thủy sinh và nuôi cá
                cảnh. Với thiết kế hiện đại, hiệu suất mạnh mẽ và khả năng lọc nước tối ưu, sản phẩm này giúp duy trì
                môi trường nước trong sạch, giảm thiểu công sức vệ sinh bể. Đặc biệt, khay tách phân hiệu quả là điểm
                nhấn nổi bật, giúp giữ lại cặn bẩn lớn trước khi nước đi vào hệ thống lọc chính, giảm tải cho vật liệu
                lọc bên trong.
              </p>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">CHÍNH SÁCH</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Truck className="h-6 w-6 text-red-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-700">GIAO HÀNG TẬN NƠI</h4>
                    <p className="text-sm text-gray-600">
                      Liên kết với những hãng giao hàng uy tín, nhanh chóng, đảm bảo
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCard className="h-6 w-6 text-red-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-700">THANH TOÁN KHI NHẬN HÀNG</h4>
                    <p className="text-sm text-gray-600">Kiểm tra hàng thoải mái trước khi thanh toán</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-red-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-700">BẢO HÀNH CHÍNH HÃNG</h4>
                    <p className="text-sm text-gray-600">Cam kết sản phẩm chính hãng, bảo hành theo tiêu chuẩn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

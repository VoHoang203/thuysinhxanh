import {Star, ChevronRight, ListOrdered, Tag, Users} from "lucide-react"
import {Link} from "react-router"

const products = [
  {
    id: 1,
    name: "Máy Bơm Mc AQua",
    price: "35.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 5,
  },
  {
    id: 2,
    name: "Máy Lọc Thùng Haiyang Tích Hợp Tach Cặn Bẩn",
    price: "1.450.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 4,
  },
  {
    id: 3,
    name: "Đèn Rọi Chìm Tiểu Cư Siêu Gọn Cho Bể Summary",
    price: "160.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 5,
  },
  {
    id: 4,
    name: "Phân Nước All In One Pro V2",
    price: "75.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 4,
  },
  {
    id: 5,
    name: "Vợt Tròn Rừng",
    price: "30.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 3,
  },
  {
    id: 6,
    name: "Seachem Matrix Pod",
    price: "30.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 5,
  },
  {
    id: 7,
    name: "Vi Sinh Tiêu",
    price: "50.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 4,
  },
  {
    id: 8,
    name: "Slender Red Tail (Hemiodus Gracilis)",
    price: "500.000₫",
    image: "/placeholder.svg?width=200&height=200",
    rating: 5,
  },
]

const bestSellingProducts = [
  { id: 1, name: "Thuốc Cá Vàng Goldy Sun...", price: "170.000₫", image: "/placeholder.svg?width=50&height=50" },
  { id: 2, name: "Thức Ăn Viên Dán Luxury Pro", price: "70.000₫", image: "/placeholder.svg?width=50&height=50" },
  { id: 3, name: "APC Mufan", price: "75.000₫", image: "/placeholder.svg?width=50&height=50" },
  { id: 4, name: "Thức Ăn Cám Cấp V-Mix", price: "70.000₫", image: "/placeholder.svg?width=50&height=50" },
]

const FilterCheckbox = ({ id, label }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      id={id}
      className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
    />
    <label htmlFor={id} className="text-sm text-gray-700 hover:text-red-600 cursor-pointer">
      {label}
    </label>
  </div>
)

export default function ProductList() {
  return (
    <div className="bg-gray-100 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="mb-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-red-600">
            Trang chủ
          </Link>
          <ChevronRight className="inline-block w-3 h-3 mx-1" />
          <span>Tất Cả Sản Phẩm</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <ListOrdered className="w-5 h-5 mr-2 text-red-600" />
                LOẠI
              </h3>
              <div className="space-y-2">
                <FilterCheckbox id="filter-all" label="Tất cả sản phẩm" />
                <FilterCheckbox id="filter-fish" label="Cảnh" />
                <FilterCheckbox id="filter-food" label="Thức ăn" />
                <FilterCheckbox id="filter-accessory" label="Phụ kiện" />
                <FilterCheckbox id="filter-plant" label="Cây thủy sinh" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-red-600" />
                GIÁ THÀNH
              </h3>
              <div className="space-y-2">
                <FilterCheckbox id="price-1" label="Giá dưới 1.000.000đ" />
                <FilterCheckbox id="price-2" label="1.000.000đ - 2.000.000đ" />
                <FilterCheckbox id="price-3" label="2.000.000đ - 3.000.000đ" />
                <FilterCheckbox id="price-4" label="3.000.000đ - 5.000.000đ" />
                <FilterCheckbox id="price-5" label="Giá trên 5.000.000đ" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-600" />
                NHÀ CUNG CẤP
              </h3>
              <div className="space-y-2">
                <FilterCheckbox id="supplier-apc" label="APC" />
                <FilterCheckbox id="supplier-mufan" label="Mufan" />
                <FilterCheckbox id="supplier-seachem" label="Seachem" />
                <FilterCheckbox id="supplier-ista" label="Ista" />
                <FilterCheckbox id="supplier-jbl" label="JBL" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">SẢN PHẨM BÁN CHẠY</h3>
              <div className="space-y-3">
                {bestSellingProducts.map((product) => (
                  <Link
                    to={`/products/${product.id}`} // Assuming detail page exists
                    key={product.id}
                    className="flex items-center space-x-3 group"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="rounded border border-gray-200 w-10 h-10"
                    />
                    <div>
                      <p className="text-sm text-gray-700 group-hover:text-red-600 transition-colors">{product.name}</p>
                      <p className="text-sm font-semibold text-red-600">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-4 p-3 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800">Tất Cả Sản Phẩm</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden group">
                  <Link to={`/products/${product.id}`} className="block">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-3">
                    <Link to={`/products/${product.id}`}>
                      <h4 className="text-sm font-medium text-gray-800 truncate group-hover:text-red-600 transition-colors h-10">
                        {product.name}
                      </h4>
                    </Link>
                    <div className="flex items-center my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-base font-semibold text-red-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-8 flex justify-center">
              <ul className="flex items-center space-x-1">
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="px-3 py-2 leading-tight text-red-600 bg-red-50 border border-red-300 hover:bg-red-100 hover:text-red-700"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    3
                  </a>
                </li>
                <li>
                  <span className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    73
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}

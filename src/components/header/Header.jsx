import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { Link, NavLink } from "react-router";
import {
  CreditCard,
  Globe,
  Search,
  ShoppingCart,
  Truck,
  User,
} from "lucide-react";
import { useAuth } from "../../context/app.context";
import useCartStore from "../../store/useCartStore";

{
  /* 
    author: Vũ Lê Anh
    mssv: HE181266
    Header của Thủy Sinh web:
    - Hiển thị logo và tên cửa hàng
    - Hiển thị menu các chức năng chính của web
    - Tìm kiếm sản phẩm
    - Giỏ hàng
*/
}
const Header = () => {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const itemCarts = useCartStore((state) => state.items);
  const totalQuantity = itemCarts.reduce((sum, item) => sum + item.quantity, 0);
 
  useEffect(() => {
    fetch("http://localhost:9999/fishCategories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const uniqueCategory = [...new Set(items.map((item) => item.name))];

  const filterSearch = (searchInput) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    localStorage.removeItem("carts");
  };
  console.log(user);
  return (
    <>
      {/* Header chính */}
      <div className="bg-white py-0 border-bottom ">
        <div className="bg-gray-100 text-xs border-b text-gray-800">
          <div className="container mx-auto px-4 flex justify-between items-center py-1">
            <div className="flex gap-4">
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-red-600"
              >
                <Globe size={14} /> GIAO HÀNG TOÀN QUỐC
              </Link>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-red-600"
              >
                <Truck size={14} /> NHẬN HÀNG THANH TOÁN SAU (COD)
              </Link>
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-red-600"
              >
                <CreditCard size={14} /> KIỂM TRA ĐƠN HÀNG
              </Link>
            </div>
            <div className="flex gap-4">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-1 hover:text-red-600"
                  >
                    <User size={14} /> ĐĂNG NHẬP
                  </Link>
                  <Link to="/register" className="hover:text-red-600">
                    ĐĂNG KÝ
                  </Link>
                </>
              ) : (
                <NavDropdown
                  title={`Chào, ${user.name}`}
                  id="user-dropdown"
                  className="hover:text-red-600"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/checkout">
                    Checkout
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </div>
          </div>
        </div>
        <header className="py-4 border-b">
          <Container
            fluid
            className="d-flex align-items-center justify-content-center px-3 flex-wrap"
          >
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center me-4">
              <img
                src="https://thuysinh365.com/storage/thumb/logo-min_1588056111.png"
                alt="ThuySinh Logo"
                width="150"
                height="80"
              />
            </Link>

            {/* Search */}
            <Form
              className="d-flex flex-grow-1 me-4 gap-2"
              style={{ maxWidth: "500px", position: "relative" }}
            >
              <Button variant="danger">
                <Search />
              </Button>
              <FormControl
                type="search"
                placeholder="Tìm kiếm sản phẩm"
                className="me-2"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {/* Hiển thị kết quả tìm kiếm */}
              {searchInput && (
                <ul
                  className="list-group position-absolute w-100"
                  style={{ top: "100%", zIndex: 1000 }}
                >
                  {filterSearch(searchInput)
                    .slice(0, 5)
                    .map((item, index) => (
                      <li key={index} className="list-group-item">
                        <Link to="#" className="text-decoration-none">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  {filterSearch(searchInput).length === 0 && (
                    <li className="list-group-item text-muted">
                      Không tìm thấy kết quả
                    </li>
                  )}
                </ul>
              )}
            </Form>

            {/* Liên hệ & Cart */}
            <div className="d-flex align-items-center gap-4">
              <div className="text-center">
                <img
                  src="https://alofone.vn/wp-content/uploads/2019/06/zalo-logo.png"
                  width="60"
                  alt="Zalo"
                />
                <div>
                  <Link to="/Zalo">Zalo</Link>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                  width="60"
                  alt="Facebook"
                />
                <div>
                  <Link to="https://www.facebook.com">Facebook</Link>
                </div>
              </div>

              {/* Cart */}
              <Link to="/cart" className="position-relative">
                <ShoppingCart size={40} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
                </span>
              </Link>
            </div>
          </Container>
        </header>

        {/* Header phụ */}
        {/* Menu Navbar */}
        <Navbar bg="primary" variant="dark" expand="md" className="py-2">
          <Container className="d-flex justify-items-center">
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="me-auto align-items-center">
                <NavDropdown title="Danh mục sản phẩm" id="category-dropdown">
                  {uniqueCategory.map((category, idx) => (
                    <NavDropdown.Item key={idx}>{category}</NavDropdown.Item>
                  ))}
                </NavDropdown>

                {/* Các NavLink */}
                <NavLink to="/" end className="nav-link">
                  TRANG CHỦ
                </NavLink>
                <NavLink to="/blogs" className="nav-link">
                  KIẾN THỨC THỦY SINH
                </NavLink>
                <NavLink to="/products" className="nav-link">
                  PHỤ KIỆN THỦY SINH
                </NavLink>
                <NavLink to="/products" className="nav-link">
                  CÁ CẢNH, TÉP CẢNH
                </NavLink>
                <NavLink to="/products" className="nav-link">
                  MẪU BỂ ĐẸP
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;

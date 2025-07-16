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

import { Link, NavLink} from "react-router";
import { CreditCard, Globe, ShoppingCart, Truck, User } from "lucide-react";
import { useAuth } from "../../context/app.context";

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

  {
    /*fetch dữ liệu từ json server  */
  }
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
  };
  console.log(user)
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
                  title={`Chào, ${user[0].name}`}
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
            className="d-flex flex-wrap align-items-center justify-content-center mx-auto px-3 gap-4"
          >
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center">
              <img
                src="https://thuysinh365.com/storage/thumb/logo-min_1588056111.png"
                alt="ThuySinh Logo"
                width="150"
                height="80"
              />
            </Link>

            {/* Search */}
            <Form
              className="d-flex flex-grow-1 mx-4"
              style={{ maxWidth: "600px", position: "relative" }}
            >
              <Button variant="danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Button>
              <FormControl
                type="search"
                placeholder="Tìm kiếm sản phẩm"
                className="me-2"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />

              {/*Hiển thị sản phẩm tìm kiếm */}
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

            {/* Thông tin liên hệ  */}
            <div className="text-end d-flex gap-5 align-bottom">
              <p className="mb-0 fw-bold text-danger fs-5 text-center">
                <img
                  src="https://alofone.vn/wp-content/uploads/2019/06/zalo-logo.png"
                  alt="ThuySinh Logo"
                  width="60"
                  height="60"
                />
                <Link to="/Zalo">📞Zalo</Link>
              </p>
              <p className="mb-0 fw-bold text-danger text-center fs-5">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                  alt="ThuySinh Logo"
                  width="60"
                  height="60"
                />
                <Link to="https://www.facebook.com">FaceBook</Link>
              </p>
            </div>

            {/* Cart */}
            <Link to="/cart" className="ms-3 relative">
              <ShoppingCart size={40} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </Container>
        </header>

        {/* Header phụ */}
        {/* Menu Navbar */}
        <Navbar
          bg="primary"
          variant="dark"
          expand="md"
          className="d-flex justify-content-center"
        >
          <Container>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="me-auto">
                {/* Danh mục sản phẩm */}
                <NavDropdown
                  title="Danh mục sản phẩm"
                  id="basic-nav-dropdown"
                  active
                >
                  {uniqueCategory.map((category, index) => (
                    <NavDropdown.Item key={index}>{category}</NavDropdown.Item>
                  ))}
                </NavDropdown>

                <Nav className="d-flex gap-3 ms-4 text-white fw-medium small">
                  <Nav.Link
                    href="/"
                    className="border-bottom border-white pb-2"
                  >
                    TRANG CHỦ
                  </Nav.Link>
                  <Nav.Link
                    href="/blogs"
                    className="border-bottom border-transparent pb-2 hover-border-white"
                  >
                    KIẾN THỨC THỦY SINH
                  </Nav.Link>
                  <Nav.Link
                    href="/products"
                    className="border-bottom border-transparent pb-2 hover-border-white"
                  >
                    PHỤ KIỆN THỦY SINH
                  </Nav.Link>
                  <Nav.Link
                    href="/products"
                    className="border-bottom border-transparent pb-2 hover-border-white"
                  >
                    CÁ CẢNH, TÉP CẢNH
                  </Nav.Link>
                  <Nav.Link
                    href="/products"
                    className="border-bottom border-transparent pb-2 hover-border-white"
                  >
                    MẪU BỂ ĐẸP
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;

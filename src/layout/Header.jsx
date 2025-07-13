import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ThuySinhCarousel from "./Carousels";
import { Link, Outlet, BrowserRouter } from "react-router";

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
  {
    /*Lưu trữ dữ liệu từ json server  */
  }
  const [items, setItems] = useState([]);

  {
    /*Lưu dữ liệu tìm kiếm người dùng nhập*/
  }
  const [searchInput, setSearchInput] = useState("");

  {
    /*fetch dữ liệu từ json server  */
  }
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  {
    /* Lọc danh mục sản phẩm sử dụng set để lấy unique values*/
  }
  const uniqueCategory = [...new Set(items.map((item) => item.category))];

  {
    /* Function tìm kiếm sử dụng filter */
  }
  const filterSearch = (searchInput) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <>
      {/* Header chính */}
      <div className="bg-white py-0 border-bottom sticky-top">
        <Container
          fluid
          className="d-flex flex-wrap align-items-center justify-content-between py-2"
        >
          {/* Logo */}
          <a href="#" className="d-flex align-items-center">
            <img
              src="https://thuysinh365.com/storage/thumb/logo-min_1588056111.png"
              alt="ThuySinh Logo"
              width="150"
              height="80"
            />
          </a>

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
                class="bi bi-search"
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
                      <a href="#" className="text-decoration-none">
                        {item.name}
                      </a>
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
          <div className="text-end d-flex">
            <p className="mb-0 fw-bold text-danger fs-5">
              <img
                src="https://alofone.vn/wp-content/uploads/2019/06/zalo-logo.png"
                alt="ThuySinh Logo"
                width="60"
                height="60"
              />
              <a href="/Zalo">📞Zalo</a>
            </p>
            <p className="mb-0 fw-bold text-danger fs-5">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                alt="ThuySinh Logo"
                width="60"
                height="60"
              />
              <a href="https://www.facebook.com">FaceBook</a>
            </p>
          </div>

          {/* Cart */}
          <a href="/Cart" className="ms-3">
            <img
              src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/all-3/shopping-cart-9xhllmo2cb79djc9j7b5kb.png/shopping-cart-pe974q2wd8bzu5cueg3qr.png?_a=DATAdtAAZAA0"
              alt="Cart"
              width="40"
              height="40"
            />
          </a>
        </Container>

        {/* Header phụ */}
        {/* Menu Navbar */}
        <Navbar
          bg="primary"
          variant="dark"
          expand="md"
          className="justify-content-center"
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

                <Nav.Link href="#" active>
                  <strong>Trang chủ</strong>
                </Nav.Link>
                <Nav.Link href="/Blog" active>
                  {" "}
                  Kiến thức thủy sinh
                </Nav.Link>
                <Nav.Link href="/Products" active>
                  Phụ kiện thủy sinh
                </Nav.Link>
                <Nav.Link href="/Products" active>
                  Cá cảnh, tép cảnh
                </Nav.Link>
                <Nav.Link href="/Products" active>
                  Mẫu bể đẹp
                </Nav.Link>
                <Nav.Link href="/Login" className="text-white" active>
                  {" "}
                  <a className="text-white" href="/Login">
                    Đăng nhập
                  </a>{" "}
                  /{" "}
                  <a className="text-white" href="/Register">
                    Đăng ký
                  </a>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* cái này để kiểm tra thử chức năng giữ nguyên khi kéo trang của header */}
      <main className="container my-5">
        <h2>Trang chính</h2>
        <div style={{ height: "2000px" }}></div>
        <div></div>
      </main>
    </>
  );
};

export default Header;

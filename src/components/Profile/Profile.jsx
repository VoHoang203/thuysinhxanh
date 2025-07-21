import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Tab,
  Form,
  Button,
  Image,
  ListGroup,
  Badge,
} from "react-bootstrap";
import {
  ShoppingCart,
  Lock,
  Camera,
  Save,
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [orderItemsMap, setOrderItemsMap] = useState({});
  const [formData, setFormData] = useState({
    name: user.name,
    phoneNumber: user.phoneNumber,
    avatar: user.avatar,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/")
      .then((res) => res.json())
      .then(setProvinces)
      .catch((err) => console.error("Error fetching provinces:", err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9999/orders?userId=${user.id}`)
      .then((res) => res.json())
      .then(setOrders)
      .catch((err) => console.error("Error fetching orders:", err));
  }, [user.id]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData, province: selectedProvince };
    localStorage.setItem("userInfo", JSON.stringify([updatedUser]));
    setUser(updatedUser);
    alert("Cập nhật thông tin thành công!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    if (passwords.current !== storedUser.password) {
      return alert("Mật khẩu hiện tại không đúng!");
    }
    if (passwords.newPass !== passwords.confirm) {
      return alert("Mật khẩu mới không khớp!");
    }
    const updatedUser = { ...storedUser, password: passwords.newPass };
    localStorage.setItem("userInfo", JSON.stringify([updatedUser]));
    alert("Đổi mật khẩu thành công!");
  };
  const handleToggleOrder = async (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null); // đóng lại nếu đang mở
      return;
    }

    if (!orderItemsMap[orderId]) {
      try {
        const res = await fetch(
          `http://localhost:9999/orderItems?orderId=${orderId}`
        );
        const data = await res.json();
        setOrderItemsMap((prev) => ({ ...prev, [orderId]: data }));
      } catch (err) {
        console.error("Lỗi khi tải orderItems:", err);
      }
    }

    setExpandedOrderId(orderId); // mở
  };
  return (
    <Container className="my-5">
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col md={4} lg={3}>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <Image
                  src={user.avatar}
                  roundedCircle
                  width={120}
                  height={120}
                  className="mb-3 border border-3 border-primary"
                />
                <h5 className="fw-bold">{user.name}</h5>
                <p className="text-muted">{user.email}</p>
              </Card.Body>
              <Nav variant="pills" className="flex-column p-2">
                <Nav.Item>
                  <Nav.Link
                    eventKey="profile"
                    className="d-flex gap-2 align-item-center"
                  >
                    <User size={18} className="me-2" /> Thông tin tài khoản
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="orders"
                    className="d-flex gap-2 align-item-center"
                  >
                    <ShoppingCart size={18} className="me-2" /> Lịch sử đơn hàng
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="change-password"
                    className="d-flex gap-2 align-item-center"
                  >
                    <Lock size={18} className="me-2" /> Đổi mật khẩu
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>

          <Col md={8} lg={9}>
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <div className="d-flex gap-2 align-item-center">
                      {" "}
                      <User size={24} className="me-2 text-primary" />
                      <h4 className="fw-bold mb-4">Hồ Sơ Của Tôi</h4>
                    </div>

                    <Form onSubmit={handleProfileSubmit}>
                      <Row>
                        <Col md={12} className="text-center mb-4">
                          <div className="position-relative d-inline-block">
                            <Image
                              src={formData.avatar}
                              roundedCircle
                              width={150}
                              height={150}
                            />
                            <Form.Control
                              type="text"
                              className="mt-2"
                              placeholder="URL ảnh avatar"
                              value={formData.avatar}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  avatar: e.target.value,
                                })
                              }
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>
                              <User size={16} className="me-1" /> Họ và Tên
                            </Form.Label>
                            <Form.Control
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>
                              <Mail size={16} className="me-1" /> Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              value={user.email}
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>
                              <Phone size={16} className="me-1" /> SĐT
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              value={formData.phoneNumber}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phoneNumber: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label>
                              <MapPin size={16} className="me-1" /> Tỉnh/Thành
                            </Form.Label>
                            <Form.Select
                              value={selectedProvince}
                              onChange={(e) =>
                                setSelectedProvince(e.target.value)
                              }
                            >
                              <option value="">Chọn tỉnh/thành phố</option>
                              {provinces.map((province) => (
                                <option
                                  key={province.code}
                                  value={province.name}
                                >
                                  {province.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        variant="primary"
                        type="submit"
                        className="mt-3 d-flex gap-2 align-item-center"
                      >
                        <Save size={18} className="me-2" /> Lưu thay đổi
                      </Button>
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="orders">
                    <h4 className="fw-bold mb-4">
                      <div className="d-flex gap-2 align-item-center">
                        {" "}
                        <ShoppingCart
                          size={24}
                          className="me-2 text-primary"
                        />{" "}
                        Lịch Sử Đơn Hàng
                      </div>
                    </h4>
                    <ListGroup>
                      {orders.map((order) => (
                        <React.Fragment key={order.id}>
                          <ListGroup.Item
                            className="d-flex justify-content-between align-items-center"
                            onClick={() => handleToggleOrder(order.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <div>
                              <h6 className="fw-bold mb-1">#{order.id}</h6>
                              <small>
                                Ngày đặt:{" "}
                                {new Date(order.createdAt).toLocaleDateString()}
                              </small>
                            </div>
                            <div className="fw-bold">
                              {order.totalPrice.toLocaleString()}₫
                            </div>
                            <Badge
                              bg={
                                order.status === "pending"
                                  ? "warning"
                                  : "success"
                              }
                            >
                              {order.status}
                            </Badge>
                          </ListGroup.Item>

                          {expandedOrderId === order.id &&
                            orderItemsMap[order.id] && (
                              <div className="px-4 pb-3">
                                {orderItemsMap[order.id].map((item) => (
                                  <div
                                    key={item.id}
                                    className="d-flex justify-content-between border-bottom py-2 text-muted"
                                  >
                                    <div>
                                      <div>
                                        Mã SP: {item.productId || item.fishId}
                                      </div>
                                      <div>Số lượng: {item.quantity}</div>
                                    </div>
                                    <div>{item.price.toLocaleString()}₫</div>
                                  </div>
                                ))}
                              </div>
                            )}
                        </React.Fragment>
                      ))}
                    </ListGroup>
                  </Tab.Pane>

                  <Tab.Pane eventKey="change-password">
                    <div className="d-flex gap-2 align-item-center">
                      <Lock size={24} className="me-2 text-primary" />{" "}
                      <h4 className="fw-bold mb-4">Đổi Mật Khẩu </h4>
                    </div>

                    <Form onSubmit={handlePasswordChange}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu hiện tại</Form.Label>
                        <Form.Control
                          type="password"
                          value={passwords.current}
                          onChange={(e) =>
                            setPasswords({
                              ...passwords,
                              current: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu mới</Form.Label>
                        <Form.Control
                          type="password"
                          value={passwords.newPass}
                          onChange={(e) =>
                            setPasswords({
                              ...passwords,
                              newPass: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                        <Form.Control
                          type="password"
                          value={passwords.confirm}
                          onChange={(e) =>
                            setPasswords({
                              ...passwords,
                              confirm: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="d-flex align-item-center"
                      >
                        <Save size={18} className="me-2" /> Cập nhật mật khẩu
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Profile;

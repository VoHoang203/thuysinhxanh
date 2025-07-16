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
  Edit,
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
 useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch("https://provinces.open-api.vn/api/");
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);
  const orders = [
    {
      id: "#DH001",
      date: "20/06/2025",
      total: "1.250.000₫",
      status: "Đã giao",
    },
    { id: "#DH002", date: "15/05/2025", total: "750.000₫", status: "Đã giao" },
    { id: "#DH003", date: "01/04/2025", total: "2.100.000₫", status: "Đã hủy" },
  ];

  const profile = JSON.parse(localStorage.getItem("userInfo"))[0];
  console.log(profile)
  return (
    <Container className="my-5">
      <Tab.Container
        id="profile-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
      >
        <Row>
          {/* Left side navigation */}
          <Col md={4} lg={3}>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <Image
                  src={profile.avatar}
                  roundedCircle
                  width={120}
                  height={120}
                  className="mb-3 border border-3 border-primary"
                />
                <h5 className="fw-bold">{profile.name}</h5>
                <p className="text-muted">{profile.email}</p>
              </Card.Body>
              <Nav variant="pills" className="flex-column p-2">
                <Nav.Item>
                  <Nav.Link
                    eventKey="profile"
                    className="d-flex align-items-center"
                  >
                    <User size={18} className="me-2" /> Thông tin tài khoản
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="orders"
                    className="d-flex align-items-center"
                  >
                    <ShoppingCart size={18} className="me-2" /> Lịch sử đơn hàng
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="change-password"
                    className="d-flex align-items-center"
                  >
                    <Lock size={18} className="me-2" /> Đổi mật khẩu
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>

          {/* Right side content */}
          <Col md={8} lg={9}>
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <Tab.Content>
                  {/* Profile Info Tab */}
                  <Tab.Pane eventKey="profile">
                    <h4 className="fw-bold mb-4 d-flex align-items-center">
                      <User size={24} className="me-2 text-primary" />
                      Hồ Sơ Của Tôi
                    </h4>
                    <Form>
                      <Row>
                        <Col md={12} className="text-center mb-4">
                          <div className="position-relative d-inline-block">
                            <Image
                              src={profile.avatar}
                              roundedCircle
                              width={150}
                              height={150}
                            />
                            <Button
                              variant="light"
                              className="position-absolute bottom-0 end-0 rounded-circle p-2 border"
                            >
                              <Camera size={20} />
                            </Button>
                          </div>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="profileName">
                            <Form.Label className="fw-semibold">
                              <User size={16} className="me-1" /> Họ và Tên
                            </Form.Label>
                            <Form.Control
                              type="text"
                              defaultValue={profile.name}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="profileEmail">
                            <Form.Label className="fw-semibold">
                              <Mail size={16} className="me-1" /> Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              defaultValue={profile.email}
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="profilePhone">
                            <Form.Label className="fw-semibold">
                              <Phone size={16} className="me-1" /> Số điện thoại
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              defaultValue={profile.phoneNumber}
                            />
                          </Form.Group>
                        </Col>
                         <Col md={12}>
                          <Form.Group className="mb-3" controlId="profileAddress">
                            <Form.Label className="fw-semibold">
                              <MapPin size={16} className="me-1" /> Chọn Tỉnh/Thành Phố
                            </Form.Label>
                            <Form.Select
                              value={selectedProvince}
                              onChange={(e) => setSelectedProvince(e.target.value)}
                            >
                              <option value="">Chọn tỉnh/thành phố</option>
                              {provinces.map((province) => (
                                <option key={province.code} value={province.name}>
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
                        className="d-flex align-items-center"
                      >
                        <Save size={18} className="me-2" /> Lưu thay đổi
                      </Button>
                    </Form>
                  </Tab.Pane>

                  {/* Order History Tab */}
                  <Tab.Pane eventKey="orders">
                    <h4 className="fw-bold mb-4 d-flex align-items-center">
                      <ShoppingCart size={24} className="me-2 text-primary" />
                      Lịch Sử Đơn Hàng
                    </h4>
                    <ListGroup variant="flush">
                      {orders.map((order) => (
                        <ListGroup.Item
                          key={order.id}
                          className="d-flex justify-content-between align-items-center flex-wrap"
                        >
                          <div>
                            <h6 className="mb-1 fw-bold">{order.id}</h6>
                            <small className="text-muted">
                              Ngày đặt: {order.date}
                            </small>
                          </div>
                          <div className="my-2 my-md-0 mx-md-3">
                            <span className="fw-bold">{order.total}</span>
                          </div>
                          <div>
                            <Badge
                              bg={
                                order.status === "Đã giao"
                                  ? "success"
                                  : "danger"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Tab.Pane>

                  {/* Change Password Tab */}
                  <Tab.Pane eventKey="change-password">
                    <h4 className="fw-bold mb-4 d-flex align-items-center">
                      <Lock size={24} className="me-2 text-primary" />
                      Đổi Mật Khẩu
                    </h4>
                    <Form>
                      <Form.Group className="mb-3" controlId="currentPassword">
                        <Form.Label className="fw-semibold">
                          Mật khẩu hiện tại
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nhập mật khẩu hiện tại"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="newPassword">
                        <Form.Label className="fw-semibold">
                          Mật khẩu mới
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nhập mật khẩu mới"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="confirmNewPassword"
                      >
                        <Form.Label className="fw-semibold">
                          Xác nhận mật khẩu mới
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nhập lại mật khẩu mới"
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="d-flex align-items-center"
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

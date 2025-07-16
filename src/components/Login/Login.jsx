import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Card,
  ProgressBar,
} from "react-bootstrap";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Facebook,
  Fish,
  Droplets,
  KeyRound,
  FacebookIcon,
  Instagram,
  Twitter,
} from "lucide-react";
import axios from "axios";
import { useAuth } from "../../context/app.context";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-google"
    viewBox="0 0 16 16"
  >
    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.25C3.216 6.533 3.166 7.254 3.166 8s.05 1.467.334 2.584C4.14 12.592 5.913 14 8 14c1.17 0 2.24-.294 3.095-.792l2.362 2.362C12.11 15.8 10.176 16 8 16z" />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { setIsAuthenticated, setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:9999/users?email=${email}`);
      const user = response.data;
      if(user[0].password !== password){
        alert("Sai pass")
        return;
      }
      if (user) {
        setUser(user);
        localStorage.setItem("userInfo", JSON.stringify(user));
        setIsAuthenticated(true)
        navigate(`/`);
      } else {
        setError("Email hoặc mật khẩu không đúng!");
      }
    } catch (err) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
      console.log(err);
    }
  };
  return (
    <Container fluid className="vh-100 p-0">
      <Row className="g-0 h-100">
        {/* Left Side - Form */}
        <Col
          md={7}
          lg={6}
          className="d-flex align-items-center justify-content-center bg-light"
        >
          <div style={{ maxWidth: "450px", width: "100%", padding: "2rem" }}>
            <div className="text-end mb-4">
              <span className="text-muted">Chưa có tài khoản? </span>
              <Link to="/register" className="fw-bold text-decoration-none">
                Đăng ký ngay
              </Link>
            </div>

            <h1 className="fw-bolder mb-2">Chào mừng trở lại!</h1>
            <p className="text-muted mb-4">
              Đăng nhập để tiếp tục với Thủy Sinh Xanh.
            </p>
            {error && <div className="alert alert-danger mb-3">{error}</div>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="border-end-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputGroup.Text className="bg-transparent">
                    <Mail size={20} className="text-muted" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    className="border-end-0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    className="bg-transparent"
                    role="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-muted" />
                    ) : (
                      <Eye size={20} className="text-muted" />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-end mb-4">
                <Link
                  to="/forgot-password"
                  size="sm"
                  className="text-decoration-none small"
                >
                  Quên mật khẩu?
                </Link>
              </div>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2 fw-bold mb-3"
              >
                Đăng Nhập
              </Button>

              <Row className="g-2">
                <Col>
                  <Button
                    variant="outline-secondary"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <GoogleIcon /> <span className="ms-2">Google</span>
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="outline-secondary"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FacebookIcon size={18} color="#1877F2" />{" "}
                    <span className="ms-2">Facebook</span>
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>

        {/* Right Side - Decorative */}
        <Col
          md={5}
          lg={6}
          className="d-none d-md-flex flex-column align-items-center justify-content-center text-white p-5"
          style={{ background: "linear-gradient(45deg, #3b82f6, #8b5cf6)" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card
              className="mb-4 shadow-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Card.Body className="d-flex align-items-center p-4">
                <div className="p-3 bg-white rounded-circle me-4">
                  <Fish size={32} className="text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold">Chất lượng hàng đầu</h5>
                  <p className="mb-0 small opacity-75">
                    Cá cảnh và cây thủy sinh được tuyển chọn kỹ lưỡng.
                  </p>
                </div>
              </Card.Body>
            </Card>

            <Card
              className="mb-4 shadow-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold mb-0">Chỉ số nước ổn định</h6>
                  <Droplets size={20} className="opacity-75" />
                </div>
                <ProgressBar
                  now={85}
                  variant="info"
                  label="pH 7.2"
                  className="mb-2"
                />
                <ProgressBar now={70} variant="warning" label="TDS 150" />
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Card.Body className="d-flex align-items-center p-4">
                <div className="p-3 bg-white rounded-circle me-4">
                  <KeyRound size={32} className="text-success" />
                </div>
                <div>
                  <h5 className="fw-bold">Bảo mật dữ liệu của bạn</h5>
                  <p className="mb-0 small opacity-75">
                    Thông tin của bạn luôn được chúng tôi bảo vệ an toàn.
                  </p>
                </div>
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-center gap-3 mt-5">
              <Instagram size={24} className="opacity-75" />
              <FacebookIcon size={24} className="opacity-75" />
              <Twitter size={24} className="opacity-75" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

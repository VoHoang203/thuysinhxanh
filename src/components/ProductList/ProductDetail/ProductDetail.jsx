import { Link } from "react-router";
import { useState } from "react";
import {
  ChevronRight,
  ShoppingCart,
  Truck,
  CreditCard,
  ShieldCheck,
  Minus,
  Plus,
} from "lucide-react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup,
  Card,
  Form,
} from "react-bootstrap";
const productImages = [
  {
    id: 1,
    src: "/placeholder.svg?width=600&height=600",
    alt: "Main filter view",
  },
  {
    id: 2,
    src: "/placeholder.svg?width=100&height=100",
    alt: "Filter side view",
  },
  { id: 3, src: "/placeholder.svg?width=100&height=100", alt: "Filter parts" },
  {
    id: 4,
    src: "/placeholder.svg?width=100&height=100",
    alt: "Filter angle view",
  },
  { id: 5, src: "/placeholder.svg?width=100&height=100", alt: "Filter in use" },
  {
    id: 6,
    src: "/placeholder.svg?width=100&height=100",
    alt: "Filter packaging",
  },
];

const sizes = ["PX-10", "PX-15", "PX-20"];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="bg-white py-4">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-3 text-muted small">
          <Link to="/" className="text-decoration-none text-muted">Trang chủ</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/product-list-page" className="text-decoration-none text-muted">Phụ Kiện Thủy Sinh Khác</Link>
          <ChevronRight size={14} className="mx-1" />
          <span>Máy Lọc Thùng Haiyang Tích Hợp Tách Cặn Bẩn</span>
        </div>

        <Row className="g-4">
          {/* Left Image Gallery */}
          <Col md={6}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fluid
              rounded
              className="border mb-3"
            />
            <div className="d-flex gap-2 flex-wrap">
              {productImages.map((img) => (
                <Button
                  key={img.id}
                  variant={selectedImage.id === img.id ? "outline-danger" : "outline-secondary"}
                  className="p-1 border"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image src={img.src} alt={img.alt} width={80} height={80} rounded />
                </Button>
              ))}
            </div>
          </Col>

          {/* Product Info */}
          <Col md={6}>
            <h2>Máy Lọc Thùng HaiYang Tích Hợp Tách Cặn Bẩn</h2>
            <p className="text-muted small">Mã Sản Phẩm: <strong className="text-dark">PVN6438</strong></p>
            <p className="text-muted small">Loại: <strong className="text-dark">Đồ Điện</strong></p>
            <p className="text-muted small">Hãng: <strong className="text-dark">Nhập Khẩu</strong></p>
            <p className="text-muted small">Bảo hành: <strong className="text-dark">1 tháng</strong></p>
            <p className="text-muted small">Kho: <strong className="text-success">Còn hàng (2)</strong></p>

            <h3 className="text-danger fw-bold mt-3 mb-4">1.600.000₫</h3>

            {/* Size selection */}
            <div className="mb-3">
              <Form.Label>Kích thước</Form.Label>
              <div className="d-flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "danger" : "outline-danger"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4">
              <Form.Label>Số lượng</Form.Label>
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-danger"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus size={16} />
                </Button>
                <Form.Control
                  type="number"
                  value={quantity}
                  readOnly
                  className="text-center mx-2"
                  style={{ width: 60 }}
                />
                <Button
                  variant="outline-danger"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Buy/Add buttons */}
            <div className="d-flex flex-column flex-sm-row gap-2 mb-4">
              <Button variant="danger" className="w-100 d-flex align-items-center justify-content-center">
                <ShoppingCart size={18} className="me-2" />
                MUA NGAY
              </Button>
              <Button variant="outline-danger" className="w-100">
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>

            <hr />

            {/* Product Description */}
            <div className="mb-4">
              <h5>GIỚI THIỆU SẢN PHẨM</h5>
              <p className="small text-muted">
                Lọc thùng Haiyang là một trong những dòng lọc ngoài được ưa chuộng trong giới chơi thủy sinh và nuôi cá
                cảnh. Với thiết kế hiện đại, hiệu suất mạnh mẽ và khả năng lọc nước tối ưu, sản phẩm này giúp duy trì
                môi trường nước trong sạch, giảm thiểu công sức vệ sinh bể...
              </p>
            </div>

            <hr />

            {/* Policy */}
            <div>
              <h5>CHÍNH SÁCH</h5>
              <div className="d-flex flex-column gap-3 mt-3">
                <div className="d-flex">
                  <Truck className="text-danger me-3" />
                  <div>
                    <strong>GIAO HÀNG TẬN NƠI</strong>
                    <div className="small text-muted">Liên kết với những hãng giao hàng uy tín, nhanh chóng, đảm bảo</div>
                  </div>
                </div>
                <div className="d-flex">
                  <CreditCard className="text-danger me-3" />
                  <div>
                    <strong>THANH TOÁN KHI NHẬN HÀNG</strong>
                    <div className="small text-muted">Kiểm tra hàng thoải mái trước khi thanh toán</div>
                  </div>
                </div>
                <div className="d-flex">
                  <ShieldCheck className="text-danger me-3" />
                  <div>
                    <strong>BẢO HÀNH CHÍNH HÃNG</strong>
                    <div className="small text-muted">Cam kết sản phẩm chính hãng, bảo hành theo tiêu chuẩn</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

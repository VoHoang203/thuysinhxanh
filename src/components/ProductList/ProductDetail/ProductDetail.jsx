import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  ShoppingCart,
  Truck,
  CreditCard,
  ShieldCheck,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import axios from "axios";
import useCartStore from "../../../store/useCartStore";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const [categoryName, setCategoryName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:9999/fish/${id}`);
        const productData = res.data;
        setProduct(productData);

        const imageObjects =
          productData.images?.map((url, index) => ({
            id: index + 1,
            src: url,
            alt: `${productData.name} - ${index + 1}`,
          })) || [];

        if (
          productData.image &&
          !imageObjects.some((img) => img.src === productData.image)
        ) {
          imageObjects.unshift({
            id: 0,
            src: productData.image,
            alt: `${productData.name} - chính`,
          });
        }
        if (productData.category) {
          try {
            const resCat = await axios.get(
              "http://localhost:9999/fishCategories"
            );
            const found = resCat.data.find(
              (c) => c.id === productData.category.toString()
            );
            console.log(found);
            if (found) setCategoryName(found.name);
          } catch (err) {
            console.error("Lỗi khi lấy category:", err);
          }
        }
        setProduct({ ...productData, images: imageObjects });
        setSelectedImage(imageObjects[0]);
      } catch (err) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  if (!product) {
    return (
      <div className="text-center py-5">
        <h5>Đang tải thông tin sản phẩm...</h5>
      </div>
    );
  }

  return (
    <div className="bg-white py-4">
      <Container>
        <div className="mb-3 text-muted small d-flex ">
          <Link to="/" className="text-decoration-none text-muted">
            Trang chủ
          </Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/products" className="text-decoration-none text-muted">
            {"Danh mục"}
          </Link>
          <ChevronRight size={14} className="mx-1" />
          <span>{product.name}</span>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Image
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              fluid
              rounded
              className="border mb-3"
            />
            <div className="d-flex gap-2 flex-wrap">
              {(product.images || []).map((img, index) => (
                <Button
                  key={index}
                  variant={
                    selectedImage?.id === img.id
                      ? "outline-danger"
                      : "outline-secondary"
                  }
                  className="p-1 border"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={80}
                    height={80}
                    rounded
                  />
                </Button>
              ))}
            </div>
          </Col>

          <Col md={6}>
            <h2>{product.name}</h2>
            <p className="text-muted small">
              Mã Sản Phẩm:{" "}
              <strong className="text-dark">
                {product.code || `PVN${product.id}`}
              </strong>
            </p>
            <p className="text-muted small">
              Loại: <strong className="text-dark">{categoryName}</strong>
            </p>
            <p className="text-muted small">
              Bảo hành:{" "}
              <strong className="text-dark">{"7 ngày từ khi nhận hàng"}</strong>
            </p>
            <p className="text-muted small">
              Kho:{" "}
              <strong
                className={product.stock > 0 ? "text-success" : "text-danger"}
              >
                {product.stock > 0 ? `Còn hàng (${product.stock})` : "Hết hàng"}
              </strong>
            </p>

            <h3 className="text-danger fw-bold mt-3 mb-4">
              {product.price?.toLocaleString("vi-VN")}₫
            </h3>

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

            <div className="d-flex flex-column flex-sm-row gap-2 mb-4">
              <Button
                variant="danger"
                className="w-100 d-flex align-items-center justify-content-center"
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image:
                      product.image ||
                      product.images?.[0] ||
                      "/placeholder.svg",
                    quantity,
                  });
                  window.location.href = "/checkout";
                }}
              >
                <ShoppingCart size={18} className="me-2" />
                MUA NGAY
              </Button>
              <Button
                variant="outline-danger"
                className="w-100"
                onClick={() =>
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image:
                      product.image ||
                      (product.images?.[0] ?? "/placeholder.svg"),
                    quantity,
                  })
                }
              >
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>

            <hr />

            <div className="mb-4">
              <h5>GIỚI THIỆU SẢN PHẨM</h5>
              <p className="small text-muted">{product.description}</p>
            </div>

            <hr />

            <div>
              <h5>CHÍNH SÁCH</h5>
              <div className="d-flex flex-column gap-3 mt-3">
                <div className="d-flex">
                  <Truck className="text-danger me-3" />
                  <div>
                    <strong>GIAO HÀNG TẬN NƠI</strong>
                    <div className="small text-muted">
                      Liên kết với những hãng giao hàng uy tín
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <CreditCard className="text-danger me-3" />
                  <div>
                    <strong>THANH TOÁN KHI NHẬN HÀNG</strong>
                    <div className="small text-muted">
                      Kiểm tra hàng thoải mái trước khi thanh toán
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <ShieldCheck className="text-danger me-3" />
                  <div>
                    <strong>BẢO HÀNH CHÍNH HÃNG</strong>
                    <div className="small text-muted">
                      Cam kết chính hãng, bảo hành đầy đủ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Đánh giá của khách hàng
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg">
            {product.reviews.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-3">Viết đánh giá</h5>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newComment) return;
                const review = {
                  id: Date.now(),
                  user: "Bạn",
                  comment: newComment,
                  rating: newRating,
                };
                setProduct((prev) => ({
                  ...prev,
                  reviews: [...prev.reviews, review],
                }));
                setNewComment("");
                setNewRating(5);
              }}
            >
              <Form.Group className="mb-2">
                <Form.Label>Đánh giá</Form.Label>
                <Form.Select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                >
                  {[5, 4, 3, 2, 1].map((val) => (
                    <option key={val} value={val}>
                      {val} sao
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Bình luận</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Nhập nội dung đánh giá..."
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Gửi đánh giá
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
const StarRating = ({ rating, totalStars = 5 }) => (
  <div className="flex items-center">
    {[...Array(totalStars)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// Comment component using only Tailwind CSS
const Comment = ({ comment }) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
      <div className="bg-gray-100 p-3 rounded-xl w-full">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-800">{comment.user}</p>
          <StarRating rating={comment.rating} />
        </div>
        <p className="text-sm text-gray-700 mt-1">{comment.comment}</p>
      </div>
    </div>
  );
};

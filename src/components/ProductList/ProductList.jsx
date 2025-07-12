import {Star, ChevronRight, ListOrdered, Tag, Users} from "lucide-react"
import {Link} from "react-router"
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  ListGroup,
  Pagination,
  Button,
} from 'react-bootstrap';
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
  <Form.Check
    type="checkbox"
    id={id}
    label={label}
    className="mb-2"
  />
);

export default function ProductList() {
  return (
    <div className="bg-light py-4">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-3 text-muted">
          <Link to="/" className="text-decoration-none text-muted me-1">
            Trang chủ
          </Link>
          <ChevronRight size={14} className="mx-1 d-inline-block" />
          <span>Tất Cả Sản Phẩm</span>
        </div>

        <Row>
          {/* Sidebar */}
          <Col lg={3}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <ListOrdered size={18} className="text-danger me-2" />
                  LOẠI
                </Card.Title>
                <FilterCheckbox id="filter-all" label="Tất cả sản phẩm" />
                <FilterCheckbox id="filter-fish" label="Cảnh" />
                <FilterCheckbox id="filter-food" label="Thức ăn" />
                <FilterCheckbox id="filter-accessory" label="Phụ kiện" />
                <FilterCheckbox id="filter-plant" label="Cây thủy sinh" />
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <Tag size={18} className="text-danger me-2" />
                  GIÁ THÀNH
                </Card.Title>
                <FilterCheckbox id="price-1" label="Giá dưới 1.000.000đ" />
                <FilterCheckbox id="price-2" label="1.000.000đ - 2.000.000đ" />
                <FilterCheckbox id="price-3" label="2.000.000đ - 3.000.000đ" />
                <FilterCheckbox id="price-4" label="3.000.000đ - 5.000.000đ" />
                <FilterCheckbox id="price-5" label="Giá trên 5.000.000đ" />
              </Card.Body>
            </Card>

            {/* <Card className="mb-4">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <Users size={18} className="text-danger me-2" />
                  NHÀ CUNG CẤP
                </Card.Title>
                <FilterCheckbox id="supplier-apc" label="APC" />
                <FilterCheckbox id="supplier-mufan" label="Mufan" />
                <FilterCheckbox id="supplier-seachem" label="Seachem" />
                <FilterCheckbox id="supplier-ista" label="Ista" />
                <FilterCheckbox id="supplier-jbl" label="JBL" />
              </Card.Body>
            </Card> */}

            <Card>
              <Card.Body>
                <Card.Title>SẢN PHẨM BÁN CHẠY</Card.Title>
                <ListGroup variant="flush">
                  {bestSellingProducts.map((product) => (
                    <ListGroup.Item key={product.id} className="p-0 mb-3 border-0 bg-transparent">
                      <Link to={`/products/${product.id}`} className="d-flex text-decoration-none text-dark align-items-center">
                        <Image src={product.image} width={40} height={40} rounded className="border me-2" />
                        <div>
                          <div className="small">{product.name}</div>
                          <div className="fw-bold text-danger">{product.price}</div>
                        </div>
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Product Grid */}
          <Col lg={9}>
            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Tất Cả Sản Phẩm</h4>
              </Card.Body>
            </Card>

            <Row xs={1} sm={2} md={3} className="g-4">
              {products.map((product) => (
                <Col key={product.id}>
                  <Card className="h-100">
                    <Link to={`/products/${product.id}`}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ objectFit: 'cover', height: '200px' }}
                        className="hover-zoom"
                      />
                    </Link>
                    <Card.Body>
                      <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                        <Card.Title as="h6" className="text-truncate">{product.name}</Card.Title>
                      </Link>
                      <div className="d-flex align-items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < product.rating ? 'text-warning fill-warning' : 'text-secondary'}
                          />
                        ))}
                      </div>
                      <Card.Text className="text-danger fw-bold">{product.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-5">
              <Pagination>
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis disabled />
                <Pagination.Item>{73}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

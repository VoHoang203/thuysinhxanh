import { ChevronRight, ListOrdered, Tag } from "lucide-react";
import { Link } from "react-router";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  ListGroup,
  Pagination,
  Spinner,
  Button,
} from "react-bootstrap";
import { StarRating } from "../ProductCart";
import axios from "axios";
import { useEffect, useState } from "react";

const bestSellingProducts = [
  {
    id: 1,
    name: "Thuốc Cá Vàng Goldy Sun...",
    price: "170.000₫",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Thức Ăn Viên Dán Luxury Pro",
    price: "70.000₫",
    image: "/placeholder.svg",
  },
  { id: 3, name: "APC Mufan", price: "75.000₫", image: "/placeholder.svg" },
  {
    id: 4,
    name: "Thức Ăn Cám Cấp V-Mix",
    price: "70.000₫",
    image: "/placeholder.svg",
  },
];

const FilterCheckbox = ({ id, label, value, onChange }) => (
  <Form.Check
    type="checkbox"
    id={id}
    label={label}
    value={value}
    onChange={onChange}
    className="mb-2"
  />
);

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    search: "",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {
          _per_page: 9,
          _page: page,
          price_gte: filters.price.split("-")[0] || undefined,
          price_lte: filters.price.split("-")[1] || undefined,
          q: filters.search || undefined,
        };
        if (filters.category) {
          params.category = filters.category;
        }
        const response = await axios.get("http://localhost:9999/fish", {
          params,
          paramsSerializer: (params) => {
            const searchParams = new URLSearchParams();
            Object.entries(params).forEach(([key, value]) => {
              if (value !== undefined) {
                searchParams.append(key, value);
              }
            });
            return searchParams.toString();
          },
        });

        let data = response.data.data || [];

        setProducts(data);
        setTotalPages(response.data.pages || 1);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [filters, page]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:9999/fishCategories");
        setCategories(res.data);
      } catch (err) {
        console.error("Lỗi load categories:", err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="bg-light py-4">
      <Container>
        <div className="mb-3 text-muted d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
          <div>
            <Link to="/" className="text-decoration-none text-muted me-1">
              Trang chủ
            </Link>
            <ChevronRight size={14} className="mx-1 d-inline-block" />
            <span>Tất Cả Sản Phẩm</span>
          </div>

          {/* Search & Clear */}
        </div>

        <Row>
          <Col lg={3}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <ListOrdered size={18} className="text-danger me-2" />
                  LOẠI
                </Card.Title>
                {categories.map((cat) => (
                  <Form.Check
                    key={cat.id}
                    type="radio"
                    name="category"
                    id={`category-${cat.id}`}
                    label={cat.name}
                    value={cat.id}
                    checked={filters.category === String(cat.id)}
                    onChange={(e) => {
                      setFilters({ ...filters, category: e.target.value });
                    }}
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-3">
                  <Tag size={18} className="text-danger me-2" />
                  GIÁ THÀNH
                </Card.Title>
                <Form.Select
                  name="price"
                  value={filters.price}
                  onChange={handleFilterChange}
                >
                  <option value="">Tất cả</option>
                  <option value="0-1000000">Dưới 1.000.000đ</option>
                  <option value="1000000-2000000">
                    1.000.000đ - 2.000.000đ
                  </option>
                  <option value="2000000-3000000">
                    2.000.000đ - 3.000.000đ
                  </option>
                  <option value="3000000-5000000">
                    3.000.000đ - 5.000.000đ
                  </option>
                  <option value="5000000-10000000">Trên 5.000.000đ</option>
                </Form.Select>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>SẢN PHẨM BÁN CHẠY</Card.Title>
                <ListGroup variant="flush">
                  {bestSellingProducts.map((product) => (
                    <ListGroup.Item
                      key={product.id}
                      className="p-0 mb-3 border-0 bg-transparent"
                    >
                      <Link
                        to={`/products/${product.id}`}
                        className="d-flex text-decoration-none text-dark align-items-center"
                      >
                        <Image
                          src={product.image}
                          width={40}
                          height={40}
                          rounded
                          className="border me-2"
                        />
                        <div>
                          <div className="small">{product.name}</div>
                          <div className="fw-bold text-danger">
                            {product.price}
                          </div>
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
                <Button
                  variant="success"
                  onClick={() =>
                    setFilters({
                      category: "",
                      price: "",
                      search: "",
                    })
                  }
                >
                  Xóa bộ lọc
                </Button>
              </Card.Body>
            </Card>
           

            <Row xs={1} sm={2} md={3} className="g-4">
              {loading ? (
                <div className="text-center w-100 py-5">
                  <Spinner animation="border" />
                </div>
              ) : (
                products.map((product) => (
                  <Col key={product.id}>
                    <Card className="h-100">
                      <Link to={`/products/${product.id}`}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{ objectFit: "cover", height: "200px" }}
                        />
                      </Link>
                      <Card.Body>
                        <Link
                          to={`/products/${product.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <Card.Title as="h6" className="text-truncate">
                            {product.name}
                          </Card.Title>
                        </Link>
                        <div className="d-flex align-items-center mb-2">
                          <StarRating rating={product.numReviews} />
                        </div>
                        <Card.Text className="text-danger fw-bold">
                          {product.price?.toLocaleString("vi-VN")}₫
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-5">
              <Pagination>
                <Pagination.Prev
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page <= 1}
                >
                  Previous
                </Pagination.Prev>

                {[...Array(totalPages)].map((_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={page === idx + 1}
                    onClick={() => setPage(idx + 1)}
                  >
                    {idx + 1}
                  </Pagination.Item>
                ))}

                <Pagination.Next
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={page >= totalPages}
                >
                  Next
                </Pagination.Next>
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

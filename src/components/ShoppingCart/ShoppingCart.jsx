import { useMemo } from "react";
import { Trash2, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Table, Button, Row, Col, Card, Badge, Form } from "react-bootstrap";
import useCartStore from "../../store/useCartStore";
import { formatCurrency } from "../../utils/lib";



export default function ShoppingCart() {
  const items = useCartStore((state) => state.items);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const removeItem = (productId) => changeQuantity({ productId, quantity: 0 });

  const handleQuantityChange = (productId, delta) => {
    const item = items.find((item) => item.productId === productId);
    if (!item) return;

    const newQuantity = item.quantity + delta;
    changeQuantity({ productId, quantity: newQuantity });
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <main className="container mx-auto my-6">
      <Row className="text-sm mb-3">
        <Col className="d-flex">
          <Link to="/" className="text-decoration-none text-muted">
            Trang chủ
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">Giỏ hàng</span>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ẢNH SẢN PHẨM</th>
                <th>THÔNG TIN</th>
                <th>ĐƠN GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th>THÀNH TIỀN</th>
                <th>XÓA</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.productId}>
                  <td>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded border border-gray-200"
                    />
                  </td>
                  <td>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    {item.model && (
                      <p className="text-sm text-gray-500">{item.model}</p>
                    )}
                  </td>
                  <td>
                    <span className="font-semibold text-blue-500">
                      {formatCurrency(item.price)}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center">
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleQuantityChange(item.productId, -1)}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="mx-2 w-25 text-center"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleQuantityChange(item.productId, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>
                    <span className="font-semibold text-blue-500">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </td>
                  <td className="text-center">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemoveItem(item.productId)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <div className="mt-4 d-flex justify-content-between align-items-center">
        <div>
        </div>
        <div className="text-right">
          <div className="d-flex justify-content-between align-items-center text-xl font-bold mb-4">
            <span>Tổng tiền:</span>
            <span className="text-blue-500 ml-4">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          <div className="d-flex gap-4">
            <Button
              as={Link}
              to="/"
              variant="outline-primary"
              className="w-100 text-center py-2 px-5 rounded-md hover:bg-gray-100"
            >
              Tiếp tục mua hàng
            </Button>

            <Button
              as={Link}
              to="/checkout"
              variant="primary"
              className="w-100 text-center py-2 px-5 rounded-md"
            >
              Tiến hành đặt hàng
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

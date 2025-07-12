import React from 'react';
import {
  Card,
  Table,
  Button,
  Form,
  Badge,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const orders = [
  {
    orderedBy: "John Doe",
    phone: "0123456789",
    email: "john.doe@example.com",
    orderId: "ORDS2995076",
    date: "28/9/2024",
    totalCost: 71.35,
    status: "Pending",
    paymentMethod: "/placeholder.svg",
  },
  {
    orderedBy: "Jane Smith",
    phone: "0987654321",
    email: "jane.smith@example.com",
    orderId: "ORDS2995077",
    date: "29/9/2024",
    totalCost: 120.5,
    status: "Completed",
    paymentMethod: "/placeholder.svg",
  },
  {
    orderedBy: "Alice Johnson",
    phone: "0112233445",
    email: "alice.j@example.com",
    orderId: "ORDS2995078",
    date: "30/9/2024",
    totalCost: 45.0,
    status: "Cancelled",
    paymentMethod: "/placeholder.svg",
  },
];

function OrdersPage() {
  return (
    <Card className="p-4">
      <Card.Body>
        <Card.Title>Order Management</Card.Title>
        <Card.Text>View and manage customer orders.</Card.Text>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search by order id, name, phone, email"
            />
          </Col>
          <Col md={6} className="text-end">
            {/* Filter dropdowns or controls can go here */}
          </Col>
        </Row>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Ordered By</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total Cost</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td><strong>{order.orderedBy}</strong></td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>{order.orderId}</td>
                <td>{order.date}</td>
                <td>${order.totalCost.toFixed(2)}</td>
                <td>
                  <Badge bg={
                    order.status === "Pending" ? "secondary"
                      : order.status === "Completed" ? "success"
                      : "danger"
                  }>
                    {order.status}
                  </Badge>
                </td>
                <td>
                  <Image
                    src={order.paymentMethod}
                    alt="Payment"
                    width={24}
                    height={24}
                    roundedCircle
                  />
                </td>
                <td>
                  <Button variant="outline-primary" size="sm">
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default OrdersPage;

import React from "react";
import {
  Card,
  Table,
  Button,
  Form,
  Badge,
  Row,
  Col,
  Image,
} from "react-bootstrap";

const categories = [
  {
    name: "Cá Betta",
    image: "/placeholder.svg",
    status: "Active",
  },
  {
    name: "Cá Vàng",
    image: "/placeholder.svg",
    status: "Active",
  },
  {
    name: "Cá Guppy",
    image: "/placeholder.svg",
    status: "Active",
  },
  {
    name: "Cá La Hán",
    image: "/placeholder.svg",
    status: "Inactive",
  },
  {
    name: "Cá Koi",
    image: "/placeholder.svg",
    status: "Active",
  },
];

export default function CategoriesPage() {
  return (
    <Card className="p-4">
      <Card.Body>
        <Card.Title>Category Management</Card.Title>
        <Card.Text>Organize your products into categories.</Card.Text>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Control type="text" placeholder="Search category..." />
          </Col>
          <Col md={6} className="text-end">
            <Button variant="primary">Add New</Button>
          </Col>
        </Row>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td className="fw-bold">{category.name}</td>
                <td>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    roundedCircle
                  />
                </td>
                <td>
                  <Badge
                    bg={category.status === "Active" ? "success" : "danger"}
                  >
                    {category.status}
                  </Badge>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <Button variant="outline-primary" size="sm">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

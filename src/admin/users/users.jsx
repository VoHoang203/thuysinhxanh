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
  Pagination,
} from 'react-bootstrap';

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    avatar: "/placeholder.svg",
    phone: "0123123123",
    email: "john.doe@example.com",
    role: "User",
    status: "Active",
  },
  {
    firstName: "Alice",
    lastName: "Doe",
    avatar: "/placeholder.svg",
    phone: "123123123",
    email: "alice.doe@example.com",
    role: "User",
    status: "Active",
  },
  {
    firstName: "Michael",
    lastName: "Doe",
    avatar: "/placeholder.svg",
    phone: "0967628400",
    email: "michael.doe@example.com",
    role: "Admin",
    status: "Active",
  },
];

export default function UsersPage() {
  return (
    <Card className="p-4">
      <Card.Body>
        <Card.Title>User Management</Card.Title>
        <Card.Text>Manage all users in your system.</Card.Text>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Control type="text" placeholder="Search user..." />
          </Col>
          <Col md={6} className="text-end">
            <Button variant="primary">Add New</Button>
          </Col>
        </Row>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    roundedCircle
                    width={40}
                    height={40}
                    alt="Avatar"
                  />
                </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <Badge bg={user.role === "Admin" ? "primary" : "secondary"}>
                    {user.role}
                  </Badge>
                </td>
                <td>
                  <Badge bg={user.status === "Active" ? "success" : "danger"}>
                    {user.status}
                  </Badge>
                </td>
                <td>
                  <Button variant="outline-primary" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </Card.Body>
    </Card>
  );
}

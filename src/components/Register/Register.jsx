import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup, Card, ProgressBar } from 'react-bootstrap';
import { User, Mail, Lock, Eye, EyeOff, Facebook, CheckCircle, XCircle, Fish, Droplets, KeyRound, Instagram, Twitter } from 'lucide-react';

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.25C3.216 6.533 3.166 7.254 3.166 8s.05 1.467.334 2.584C4.14 12.592 5.913 14 8 14c1.17 0 2.24-.294 3.095-.792l2.362 2.362C12.11 15.8 10.176 16 8 16z"/>
    </svg>
);


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const hasNumberOrSymbol = /[0-9!@#$%^&*()]/.test(password);
    const hasLowerAndUpperCase = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
    const isLengthValid = password.length >= 8 && password.length <= 25;

    const passwordChecks = [
        { check: isLengthValid, label: 'Từ 8 đến 25 ký tự' },
        { check: hasLowerAndUpperCase, label: 'Chữ hoa và chữ thường' },
        { check: hasNumberOrSymbol, label: 'Ít nhất một số hoặc ký tự đặc biệt' },
    ];
    
    return (
        <Container fluid className="vh-100 p-0">
            <Row className="g-0 h-100">
                {/* Left Side - Form */}
                <Col md={7} lg={6} className="d-flex align-items-center justify-content-center bg-light">
                    <div style={{ maxWidth: '450px', width: '100%', padding: '2rem' }}>
                        <div className="text-end mb-4">
                            <span className="text-muted">Đã có tài khoản? </span>
                            <Link to="/login" className="fw-bold text-decoration-none">Đăng nhập</Link>
                        </div>

                        <h1 className="fw-bolder mb-2">Đăng Ký</h1>
                        <p className="text-muted mb-4">Tham gia cộng đồng yêu thủy sinh của chúng tôi.</p>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Họ và Tên</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Nhập họ và tên của bạn" className="border-end-0" />
                                    <InputGroup.Text className="bg-transparent"><User size={20} className="text-muted" /></InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <Form.Control type="email" placeholder="Nhập email" className="border-end-0" />
                                    <InputGroup.Text className="bg-transparent"><Mail size={20} className="text-muted" /></InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <InputGroup>
                                    <Form.Control 
                                        type={showPassword ? 'text' : 'password'} 
                                        placeholder="Tạo mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="border-end-0"
                                    />
                                    <InputGroup.Text className="bg-transparent" role="button" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeOff size={20} className="text-muted" /> : <Eye size={20} className="text-muted" />}
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            

                             <Form.Group className="mb-4" controlId="formBasicRetypePassword">
                                <Form.Label>Nhập lại mật khẩu</Form.Label>
                                 <InputGroup>
                                     <Form.Control type="password" placeholder="Xác nhận mật khẩu" className="border-end-0" />
                                     <InputGroup.Text className="bg-transparent"><Lock size={20} className="text-muted" /></InputGroup.Text>
                                 </InputGroup>
                            </Form.Group>


                            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold mb-3">
                                Đăng Ký
                            </Button>

                            <Row className="g-2">
                                <Col>
                                    <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center">
                                        <GoogleIcon /> <span className="ms-2">Google</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center">
                                        <Facebook size={18} color="#1877F2" /> <span className="ms-2">Facebook</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>

                {/* Right Side - Decorative */}
                <Col md={5} lg={6} className="d-none d-md-flex flex-column align-items-center justify-content-center text-white p-5" style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}>
                     <div className="w-100" style={{maxWidth: '400px'}}>
                        <Card className="mb-4 shadow-lg" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)'}}>
                            <Card.Body className="d-flex align-items-center p-4">
                               <div className="p-3 bg-white rounded-circle me-4">
                                   <Fish size={32} className="text-primary" />
                               </div>
                               <div>
                                   <h5 className="fw-bold">Chất lượng hàng đầu</h5>
                                   <p className="mb-0 small opacity-75">Cá cảnh và cây thủy sinh được tuyển chọn kỹ lưỡng.</p>
                               </div>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4 shadow-lg" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)'}}>
                            <Card.Body className="p-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="fw-bold mb-0">Chỉ số nước ổn định</h6>
                                    <Droplets size={20} className="opacity-75"/>
                                </div>
                                <ProgressBar now={85} variant="info" label="pH 7.2" className="mb-2" />
                                <ProgressBar now={70} variant="warning" label="TDS 150" />
                            </Card.Body>
                        </Card>

                         <Card className="shadow-lg" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)'}}>
                            <Card.Body className="d-flex align-items-center p-4">
                               <div className="p-3 bg-white rounded-circle me-4">
                                   <KeyRound size={32} className="text-success" />
                               </div>
                               <div>
                                   <h5 className="fw-bold">Bảo mật dữ liệu của bạn</h5>
                                   <p className="mb-0 small opacity-75">Thông tin của bạn luôn được chúng tôi bảo vệ an toàn.</p>
                               </div>
                            </Card.Body>
                        </Card>
                        
                        <div className="d-flex justify-content-center gap-3 mt-5">
                            <Instagram size={24} className="opacity-75" />
                            <Facebook size={24} className="opacity-75" />
                            <Twitter size={24} className="opacity-75" />
                        </div>
                     </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

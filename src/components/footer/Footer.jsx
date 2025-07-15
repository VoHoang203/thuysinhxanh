import { ListGroup } from 'react-bootstrap';

{/* 
    author: Vũ Lê Anh
    mssv: HE181266
    Footer của Thủy Sinh web
*/}
const Footer = () => {

    return (
        <>
            <footer className="bg-light text-dark text-start justify-content-center align-items-center py-3">

                <div className="container mb-0">

                    <div className="row">

                        <div className="col-md-4 mb-3 mb-md-0 py-2">
                            <strong ><a>Thủy Sinh Store</a></strong>

                            <nav className="py-4">
                                <ul>
                                    <li><a>Địa Chỉ: </a></li>
                                    <ul>
                                        <li><a>123 Đường Phố, Quận Huyện, Thành Phố</a></li>
                                    </ul>

                                    <li><a>Contact:</a></li>
                                    <ul>
                                        <li><a>0987654321</a></li>
                                        <li><a>0987653214</a></li>
                                        <li><strong>Email: </strong><a>thuysinhstore@gmail.com</a></li>
                                    </ul>
                                    <li><a>Privacy Policy</a></li>
                                </ul>
                            </nav>

                        </div>

                        <div className="col-md-4 mb-3 mb-md-0">

                            <strong ><a>Hướng Dẫn Khách Hàng</a></strong>

                            <nav className="py-4">
                                <ul className="decoration-none list-unstyled">
                                    <li><a href="#">Hướng dẫn mua hàng</a></li>
                                    <li><a href="#">Hướng dẫn thanh toán</a></li>
                                    <li><a href="#">Hướng dẫn giao nhận</a></li>
                                </ul>
                            </nav>

                            <strong ><a>Chấp nhận thanh toán</a></strong>
                            <ListGroup horizontal className="py-1">
                                <ListGroup.Item><img src="https://bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_1.png?1730118464073" alt="Visa" /></ListGroup.Item>
                                <ListGroup.Item><img src="https://bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_2.png?1730118464073" alt="Mastercard" /></ListGroup.Item>
                                <ListGroup.Item><img src="https://bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_3.png?1730118464073" alt="Paypal" /></ListGroup.Item>
                                <ListGroup.Item><img src="https://bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_4.png?1730118464073" alt="Visa" /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item><img src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" alt="" height='50' href="http://online.gov.vn/Home/WebDetails/115761" /></ListGroup.Item>
                            </ListGroup>

                        </div>


                        <div className="col-md-4 mb-3 mb-md-0 py-2">
                            <strong ><a>Chính Sách</a></strong>

                            <nav className="py-4">
                                <ul className="decoration-none list-unstyled">
                                    <li><a href="#">Chính sách và quy định chung</a></li>
                                    <li><a href="#">Chính sách bảo mật thông tin</a></li>
                                    <li><a href="#">Chính sách vận chuyển và giao nhận</a></li>
                                    <li><a href="#">Chính sách trả hàng và hoàn tiền</a></li>
                                    <li><a href="#">Chính sách thanh toán</a></li>
                                    <li><a href="#">Chính sách kiểm tra hàng hóa</a></li>
                                </ul>
                            </nav>

                        </div>

                    </div>

                </div>

            </footer>


            <footer className="bg-primary text-white text-center py-2">
                <p className="mb-0">Design by Nhóm G2</p>
                <p className="mb-0">&copy; {new Date().getFullYear()} Thủy Sinh Store. All rights reserved.</p>
            </footer>



        </>
    )
}

export default Footer;
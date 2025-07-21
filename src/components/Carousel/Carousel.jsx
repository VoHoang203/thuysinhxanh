import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
{/* 
    author: Vũ Lê Anh
    mssv: HE181266
    Carousel của Thủy Sinh web
    sử dụng map để lấy dữ liệu cho carousel

*/}

{/* */}
const CarouselImage = [
    {
        src: 'https://rinaquarium.com/wp-content/uploads/2024/11/be-ca-dep-1.png',
        captionTitle: 'Bể cá cao cấp',
        captionText: '',
        link: ''

    },
    {
        src: 'https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_2.png?1730118464073',
        captionTitle: '',
        captionText: '',
        link: ''

    },
    {
        src: 'https://greenmore.vn/wp-content/uploads/2020/07/kinh-nghiem-chon-may-bom-loc-nuoc-ho-ca-koi-ngoai-troi-01-compressed.jpg',
        captionTitle: '',
        captionText: '',
        link: ''

    }
];

function ThuySinhCarousel() {
    return (
        <Carousel>
            {CarouselImage.map((item, index) => (
                <Carousel.Item key={index} interval={7000}>
                    <a href={item.link}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={`Slide ${index + 1}`}
                            height={600}
                            width={800}
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>{item.captionTitle}</h3>
                        <p>{item.captionText}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ThuySinhCarousel;

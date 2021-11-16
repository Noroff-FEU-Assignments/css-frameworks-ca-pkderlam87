import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselNews() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/../../public/images/carousel/carousel-1.jpg"
                        alt="A shelf with some old TVs and an old bicycle in front"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/../../public/images/carousel/carousel-2.jpg"
                        alt="An old camera"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/../../public/images/carousel/carousel-3.jpg"
                        alt="A broken TV"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselNews

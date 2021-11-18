import React from 'react';
import carousel1 from '../images/carousel/carousel1.jpg';
import carousel2 from '../images/carousel/carousel2.jpg';
import carousel3 from '../images/carousel/carousel3.jpg';
import Carousel from 'react-bootstrap/Carousel';


function CarouselNews() {
    return (
        <>
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="A shelf with some old TVs and an old bicycle in front"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="An old camera"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="A broken TV"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselNews
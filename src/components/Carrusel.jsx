import React from "react";
import Slider from "react-slick";
import { images } from "../data/dummy";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
    };

    return (     
        <div className="container_slider">
            <Slider {...settings}>
                {
                    images.map(item => (
                        <img  key={item.id} className="img_carrusel" src={`/images/${item.imageName}`} alt="" />
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carrusel
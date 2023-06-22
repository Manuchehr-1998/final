import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Order = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8">Pause On Hover</h2>
      <Slider {...settings}>
        <div>
          <h3 className="text-center text-3xl">1</h3>
        </div>
        <div>
          <h3 className="text-center text-3xl">2</h3>
        </div>
        <div>
          <h3 className="text-center text-3xl">3</h3>
        </div>
        <div>
          <h3 className="text-center text-3xl">4</h3>
        </div>
        <div>
          <h3 className="text-center text-3xl">5</h3>
        </div>
        <div>
          <h3 className="text-center text-3xl">6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Order;

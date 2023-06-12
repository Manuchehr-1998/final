import React from "react";
import Slider from "react-slick";
import { TiShoppingCart } from 'react-icons/ti'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ColdFood({ coldFood }) {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
     <Slider {...settings}>
      {coldFood.map((food) => (
        <div key={food.id} className='slide text-white w-[30%] border-2 p-4 rounded-xl bg-gray-800'>
          <img src={food.img} className='w-[100%] h-[30vh] rounded-lg' alt="" />
          <div className='flex justify-between items-center py-2'>
            <h3 className='text-xl font-bold'>{food.nameFood}</h3>
            <p>{food.weight}</p>
          </div>
          <p>{food.about}</p>
          <div className='flex gap-11'>
            <h2 className='text-3xl font-bold'>{food.price}</h2>
            <button className='bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2'>В корзину <TiShoppingCart/></button>
          </div>
        </div>
      ))}
    </Slider>
    </>
   
  );
}

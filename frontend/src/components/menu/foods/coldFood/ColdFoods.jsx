import { Carousel } from "@material-tailwind/react";
import React from 'react'
import cold1 from '../../../../img/coldfood1.jpg'
import cold2 from '../../../../img/coldfood2.jpg'
import cold3 from '../../../../img/coldfood3.jpg'
import cold4 from '../../../../img/coldfood4.jpg'
import cold5 from '../../../../img/coldfood5.jpg'
import cold6 from '../../../../img/coldfood6.jpg'
import cold7 from '../../../../img/coldfood7.jpg'
import cold8 from '../../../../img/coldfood8.jpg'
import ColdFood from './ColdFood'
export default function ColdFoods() {

  const coldFoods = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'name', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'name', weight: '400гр', about: 'lorem', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'name', weight: '250гр', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'name', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'name', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'name', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold7, nameFood: 'name', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'name', weight: '330гр', about: 'lorem', price: '35c' },
  ];
  

  return (
    <div>
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )} >
        <div className='flex justify-between gap-5 bg-[#403C3B] pb-6'>
          {coldFoods.map((coldFood) => (
            <ColdFood coldFood={coldFood} />
          ))}
        </div>
      </Carousel >
    </div>
  )
}

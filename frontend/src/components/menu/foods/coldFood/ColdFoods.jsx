import React from 'react'
import cold1 from '../../../../img/coldfood1.jpg'
import cold2 from '../../../../img/coldfood2.jpg'
import cold3 from '../../../../img/coldfood3.jpg'
import cold4 from '../../../../img/coldfood4.jpg'
import cold5 from '../../../../img/coldfood5.jpg'
import cold6 from '../../../../img/coldfood6.jpg'
import cold8 from '../../../../img/coldfood8.jpg'
import ColdFood from './ColdFood'
export default function ColdFoods() {

  const coldFoods = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Цезарь', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Стейк', weight: '400гр', about: 'lorem', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Витаминный', weight: '250гр', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Брускетта', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Коул Слоу', weight: '240гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Хумус', weight: '400гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Капрезе', weight: '330гр', about: 'lorem', price: '35c' },
  ];


  return (
    <div className="w-full bg-[#403C3B] ">
    <Slider {...settings}>
      {coldFoods.map((coldFood) => (
        <ColdFood coldFood={coldFood} />
      ))}
    </div>
  )
}

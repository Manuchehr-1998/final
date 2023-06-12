import React from 'react'
import cold1 from '../../../../img/meat1.jpg'
import cold2 from '../../../../img/meat2.jpg'
import cold3 from '../../../../img/meat3.jpg'
import cold4 from '../../../../img/meat4.jpg'
import cold5 from '../../../../img/meat5.avif'
import cold6 from '../../../../img/meat6.jpg'
import cold8 from '../../../../img/meat7.jpg'
import MeatFood from './MeatFood'

export default function MeatFoods() {

  const meatFoods = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Цезарь', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Стейк', weight: '400гр', about: 'lorem', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Витаминный', weight: '250гр', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Брускетта', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Коул Слоу', weight: '240гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Хумус', weight: '400гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Капрезе', weight: '330гр', about: 'lorem', price: '35c' },
  ];


  return (
    <div className='flex justify-between gap-5 bg-[#403C3B] pb-6 px-5'>
      {meatFoods.map((meatFood) => (
        <MeatFood meatFood={meatFood} />
      ))}
    </div>
  )
}

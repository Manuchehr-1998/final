import React from 'react'
import cold1 from '../../../../img/bludo1.jpg'
import cold2 from '../../../../img/bludo2.jpg'
import cold3 from '../../../../img/bludo3.jpg'
import cold4 from '../../../../img/bludo4.jpg'
import cold5 from '../../../../img/bludo5.jpg'
import cold6 from '../../../../img/bludo6.jpg'
import cold8 from '../../../../img/bludo7.jpg'
import HotFood from './HotFood'
export default function HotFoods() {

  const hotFoods = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Цезарь', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Стейк', weight: '400гр', about: 'lorem', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Витаминный', weight: '250гр', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Брускетта', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Фрикадельки', weight: '240гр', about: 'Куриные фрикадельки с соусом', price: '35c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Мини-пицца', weight: '1 порция', about: 'Мини-пицца с ветчиной и грибами', price: '45c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Капрезе', weight: '330гр', about: 'lorem', price: '35c' },
  ];


  return (
    <div className='flex justify-between gap-5 bg-[#403C3B] pb-6 px-5'>
      {hotFoods.map((hotFood) => (
        <HotFood hotFood={hotFood} />
      ))}
    </div>
  )
}

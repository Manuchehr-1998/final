import React from 'react'
import cold1 from '../../../../img/drinks (2).jpg'
import cold2 from '../../../../img/drinks (1).jpg'
import cold3 from '../../../../img/drinks (3).jpg'
import cold4 from '../../../../img/drinks (4).jpg'
import cold5 from '../../../../img/drinks (7).jpg'
import cold6 from '../../../../img/drinks (6).jpg'
import cold8 from '../../../../img/drinks (5).jpg'
import Drink from './Drink'
export default function Drinks() {

  const drinks = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Вишневый', weight: '1 стакан', about: 'lorem', price: '25c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Мохито', weight: '1 стакан', about: 'lorem', price: '17c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Витаминный', weight: '1 стакан', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Малиновый', weight: '1 стакан', about: 'lorem', price: '12c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Клубничный', weight: '1 стакан', about: 'lorem', price: '30c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Лайм', weight: '1 стакан', about: 'lorem', price: '22c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Мультифрукт', weight: '1 стакан', about: 'lorem', price: '35c' },
  ];


  return (
    <div className='flex justify-between gap-5 bg-[#403C3B] pb-6 px-5'>
      {drinks.map((drink) => (
        <Drink drink={drink} />
      ))}
    </div>
  )
}

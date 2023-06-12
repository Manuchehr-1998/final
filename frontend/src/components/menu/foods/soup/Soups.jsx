import React from 'react'
import cold1 from '../../../../img/soup1.jpg'
import cold2 from '../../../../img/soup2.jpg'
import cold3 from '../../../../img/soup3.jpg'
import cold4 from '../../../../img/soup4.jpg'
import cold5 from '../../../../img/soup5.jpg'
import cold6 from '../../../../img/soup6.jpg'
import cold8 from '../../../../img/soup7.jpg'

import Soup from './Soup'
export default function Soups() {

  const soups = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Томатный', weight: '1 порция', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Куринный', weight: '1 порция', about: 'lorem', price: '37c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Борщ', weight: '1 порция', about: 'lorem', price: '18c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Фасолевый', weight: '1 порция', about: 'lorem', price: '42c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Французский', weight: '1 порция', about: 'lorem', price: '23c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Харчо', weight: '1 порция', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Минестроне', weight: '1 порция', about: 'lorem', price: '26c' },
  ];


  return (
    <div className='flex justify-between gap-5 bg-[#403C3B] pb-6 px-5'>
      {soups.map((soup) => (
        <Soup soup={soup} />
      ))}
    </div>
  )
}

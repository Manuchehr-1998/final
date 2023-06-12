import React from 'react'
import cold1 from '../../../../img/fish1.jpg'
import cold2 from '../../../../img/fish2.jpg'
import cold3 from '../../../../img/fish3.jpeg'
import cold4 from '../../../../img/fish4.jpg'
import cold5 from '../../../../img/fish5.jpg'
import cold6 from '../../../../img/fish6.jpg'
import cold8 from '../../../../img/fish7.jpg'
import Fish from './Fish'
export default function Fishs() {

  const fishs = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Лосось', weight: '330гр', about: 'Жареный лосось', price: '35c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Тунец', weight: '400гр', about: 'Тунец в соевом соусе', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Окунь', weight: '250гр', about: 'Окунь с овощами', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Форель', weight: '330гр', about: 'Запеченный форель', price: '35c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Скумбрия', weight: '240гр', about: 'Скумбрия в томатном соусе', price: '35c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Судак', weight: '400гр', about: 'Жареный судак с лимоном', price: '35c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Минтай', weight: '330гр', about: 'Жареный минтай', price: '35c' },
  ];


  return (
    <div className='flex justify-between gap-5 bg-[#403C3B] pb-6 px-5'>
      {fishs.map((fish) => (
        <Fish fish={fish} />
      ))}
    </div>
  )
}

import React from 'react'
import cold1 from '../../../../img/dish1.jpg'
import cold2 from '../../../../img/dish2.jpg'
import cold3 from '../../../../img/dish3.jpg'
import cold4 from '../../../../img/dish4.jpg'
import cold5 from '../../../../img/dish5.jpg'
import cold6 from '../../../../img/dish6.jpg'
import cold8 from '../../../../img/dish7.jpg'
import Dish from './Dish'
export default function Dishs() {

    const dishs = [
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
            {dishs.map((dish) => (
                <Dish dish={dish} />
            ))}
        </div>
    )
}

import React from 'react'
import Footer from '../../footer/Footer'
import Header from '../../Header/Header'
import Category from '../Category'
import DishesOrder from '../dishesOrder/DishesOrder'



export default function Stock() {
  return (
    <div className='bg-[#403C3B]'>
      <Header />
      <Category />
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white font-bold">АКЦИИ</h1>
        </div>
        <div>
          <div className='rounded-xl text-white w-[25%]'>
            <img  className='w-[100%]' alt="" />
            <p></p>
            <p>Самое время попробовать «Сырную» пиццу, «Маргариту»,
              пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
              суп с гренками, Грибной Стартер, Рулетики с сыром,
              Картофель из печи, Картофельные оладьи или Греческий
              салат. Выберите свой вкус!</p>
            <p className='text-green-400'>до 31 июля.</p>
          </div>
        </div>
      </div>
      <DishesOrder />
      <Footer />
    </div>
  )
}

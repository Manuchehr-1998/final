import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

export default function ColdFood({ coldFood }) {
  return (
    <>
      <div className='text-white w-[420px] border-2 p-4 rounded-xl bg-gray-800'>
        <img src={coldFood.img} className='w-[100%] h-[30vh] rounded-lg' alt="" />
        <div className='flex justify-between items-center py-2'>
          <h3 className='text-xl font-bold'>{coldFood.nameFood}</h3>
          <p>{coldFood.weight}</p>
        </div>
        <p>{coldFood.about}</p>
        <div className='flex gap-11'>
          <h2 className='text-3xl font-bold'>{coldFood.price}</h2>
          <button className='bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2'>В корзину <TiShoppingCart/></button>
        </div>
      </div>
    </>
  )
}

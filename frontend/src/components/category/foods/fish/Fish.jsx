import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

export default function Fish({ fish }) {
  return (
    <>
      <div className='text-white  border-2 p-4 rounded-xl bg-gray-800 m-3'>
        <img src={fish.img} className='w-[100%] h-[30vh] rounded-lg' alt="" />
        <div className='flex justify-between items-center py-2'>
          <h3 className='text-2xl font-bold'>{fish.nameFood}</h3>
          <p>{fish.weight}</p>
        </div>
        <p>{fish.about}</p>
        <div className='flex justify-between items-center py-2'>
          <h2 className='text-3xl font-bold'>{fish.price}</h2>
          <button className='bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2'>В корзину <TiShoppingCart/></button>
        </div>
      </div>
    </>
  )
}

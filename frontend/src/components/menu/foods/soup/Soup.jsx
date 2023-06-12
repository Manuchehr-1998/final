import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'

export default function Soup({ soup }) {
  return (
    <>
      <div className='text-white w-[420px] border-2 p-4 rounded-xl bg-gray-800'>
        <img src={soup.img} className='w-[420px] h-[220px] rounded-lg' alt="" />
        <div className='flex justify-between items-center py-2'>
          <h3 className='text-xl font-bold'>{soup.nameFood}</h3>
          <p>{soup.weight}</p>
        </div>
        <p>{soup.about}</p>
        <div className='flex gap-11'>
          <h2 className='text-3xl font-bold'>{soup.price}</h2>
          <button className='bg-green-400 text-white  rounded-lg flex gap-2 items-center p-2'>В корзину <TiShoppingCart/></button>
        </div>
      </div>
    </>
  )
}

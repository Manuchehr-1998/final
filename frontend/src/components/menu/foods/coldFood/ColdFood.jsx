import React from 'react'

export default function ColdFood({ coldFood }) {
  return (
    <>
      <div className='text-white w-[420px] border-2 p-4 rounded-xl'>
        <img src={coldFood.img} className='w-[420px] h-[220px] p-0' alt="" />
        <div className='flex justify-between px-4'>
          <h3 className='text-2xl'>{coldFood.nameFood}</h3>
          <p>{coldFood.weight}</p>
        </div>
        <p>{coldFood.about}</p>
        <div className='flex gap-11'>
          <h2 className='text-3xl'>{coldFood.price}</h2>
          <button className='bg-green-400 text-white w-[135px] h-[45px] rounded-xl'>В корзину</button>
        </div>
      </div>
    </>
  )
}

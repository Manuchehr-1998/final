import React from 'react'

export default function HotFood({ hotFood }) {
  return (
    <>
      <div className='text-white w-[420px] border-2 p-4 rounded-xl'>
        <img src={hotFood.img} className='w-[400px] h-[220px]' alt="" />
        <div className='flex justify-between px-4'>
          <h3>{hotFood.nameFood}</h3>
          <p>{hotFood.weight}</p>
         </div>
        <p>{hotFood.about}</p>
        <h2>{hotFood.price}</h2>
      </div>

    </>
  )
}

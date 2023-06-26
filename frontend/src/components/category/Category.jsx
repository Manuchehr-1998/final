import React from 'react'

export default function Category() {
  return (
    <div className="flex justify-evenly w-[100%] h-[10vh] items-center bg-[#403C3B] border-b-2 border-gray-600 ">
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Холодные закуски</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Горячие закуски</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Мясные блюда</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Супы</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Рыбные блюда</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Гриль меню</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Фирменные блюда</button>
      <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-9'>Напитки</button>
    </div>
  )
}

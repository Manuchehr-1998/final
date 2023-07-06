import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <div className="flex xs:overflow-auto xs:whitespace-nowrap xs:gap-4 xs:flex xs:w-[100%] justify-evenly w-[100%] h-[10vh] items-center bg-[#403C3B] border-b-2 border-gray-600 ">
      <Link to='coldFood'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Холодные закуски</button>
      </Link>
      <Link to='hotFood'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Горячие закуски</button>
      </Link>
      <Link to='meatFood'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Мясные блюда</button>
      </Link>
      <Link to='soup'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Супы</button>
      </Link>
      <Link to='fish'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Рыбные блюда</button>
      </Link>
      <Link to='grill'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Гриль меню</button>
      </Link>
      <Link to='dish'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Фирменные блюда</button>
      </Link>
      <Link to='drink'>
        <button className='text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-[3.3vh]'>Напитки</button>
      </Link>
    </div>
  )
}

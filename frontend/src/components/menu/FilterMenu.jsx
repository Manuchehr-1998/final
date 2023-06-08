import React from 'react'

export default function FilterMenu() {
    return (
        <div className='bg-[#403C3B] py-3 h-[90px] flex items-center justify-between px-8 border-b-2 border-gray-500'>
            <button className='text-white'>Холодные закуски</button>
            <button className='text-white'>Горячие закуски</button>
            <button className='text-white'>Мясные блюда</button>
            <button className='text-white'>Рыбные блюда</button>
            <button className='text-white'>Супы </button>
            <button className='text-white'>Гриль меню</button>
            <button className='text-white'>Фирменные блюда</button>
            <button className='text-white'>Напитки</button>
        </div>
    )
}

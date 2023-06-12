import React from 'react'
import ColdFoods from './foods/coldFood/ColdFoods'
import FilterMenu from './FilterMenu'
import HotFoods from './foods/hotFood/HotFoods'
import Drinks from './foods/drink/Drinks'
import Fishs from './foods/fish/Fishs'
import MeatFoods from './foods/meatFood/MeatFoods'
import Soups from './foods/soup/Soups'
import Grills from './foods/grill/Grills'
import Dishs from './foods/dish/Dishs'

export default function Menu() {
  return (
    <div>
      <div>
        <FilterMenu />
        <div>
          <div className='flex items-center  pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>ХОЛОДНЫЕ ЗАКУСКИ</h1>
          </div>
        </div>
        <ColdFoods />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>ГОРЯЧИЕ ЗАКУСКИ</h1>
          </div>
        </div>
        <HotFoods />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>МЯСНЫЕ БЛЮДА</h1>
          </div>
        </div>
        <MeatFoods />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>РЫБНЫЕ БЛЮДА</h1>
          </div>
        </div>
        <Fishs />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>СУПЫ</h1>
          </div>
        </div>
        <Soups />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>ГРИЛЬ МЕНЮ</h1>
          </div>
        </div>
        <Grills />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>ФИРМЕННЫЕ БЛЮДА</h1>
          </div>
        </div>
        <Dishs />
      </div>
      <div>
        <div>
          <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
            <div className='h-9 w-1 bg-green-400'></div>
            <h1 className='text-white'>НАПИТКИ</h1>
          </div>
        </div>
        <Drinks />
      </div>
    </div>
  )
}

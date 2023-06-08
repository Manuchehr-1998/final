import React from 'react'
import ColdFoods from './foods/coldFood/ColdFoods'
import FilterMenu from './FilterMenu'
import HotFoods from './foods/hotFood/HotFoods'

export default function Menu() {
  return (
   <div>
     <div>
      <FilterMenu />
     <div>
     <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
        <div className='h-9 w-1 bg-green-400'></div>
        <h1 className='text-white'>ХОЛОДНЫЕ ЗАКУСКИ</h1>
      </div>
    </div>
    <ColdFoods/>
     </div>
     <div>
    <div>
    <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
       <div className='h-9 w-1 bg-green-400'></div>
       <h1 className='text-white'>ГОРЯЧИЕ ЗАКУСКИ</h1>
     </div>
   </div>
   <HotFoods/>
    </div>
   </div>
  )
}

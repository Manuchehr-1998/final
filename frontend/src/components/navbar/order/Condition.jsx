import React from 'react'
import FilterMenu from '../../menu/FilterMenu'
import Navbar from '../Navbar'
import foto from '../../../img/map.png'

export default function Condition() {
    return (
        <div>
            <Navbar />
            <FilterMenu />
            <div>
                <div>
                    <div className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'>
                        <div className='h-9 w-1 bg-green-400'></div>
                        <h1 className='text-white'>УСЛОВИЯ ДОСТАВКИ</h1>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <img src={foto} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

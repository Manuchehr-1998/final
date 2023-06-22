import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function Grill({ grill }) {
    return (
        <>
            <div className='text-white  border-2 border-gray-500 p-4 rounded-xl bg-gray-800 m-3'>
                <img src={grill.img} className='w-[100%] h-[30vh] rounded-lg' alt="" />
                <div className='flex justify-between items-center py-2'>
                    <h3 className='text-2xl font-bold'>{grill.nameFood}</h3>
                    <p>{grill.weight}</p>
                </div>
                <p>{grill.about}</p>
                <div className='flex justify-between items-center py-2'>
                    <h2 className='text-3xl font-bold'>{grill.price}</h2>
                    <div className='flex items-center gap-4'>
                        <button className="bg-green-400 text-white rounded-lg flex gap-2 items-center p-2">
                            В корзину <TiShoppingCart />
                        </button>
                        <Link key={grill.id} to={`/CardProduct/${grill.id}`}>
                            <button>Подробнее</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

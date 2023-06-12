import React from 'react'
import { BiMap } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { MdWhatsapp } from 'react-icons/md'
import Foto from '../../img/map.png'
export default function DishesOrder() {
  return (
    <div className='flex justify-between  items-end py-[10vh] px-[25vh]  ' style={{backgroundImage:`url(${Foto})`, height:`80vh`, width:`100%`,backgroundSize:'cover' }}>
      <div className='bg-[#403C3B] p-8 rounded-lg text-white w-[45%]'>
        <div>
          <h1 className='text-3xl pb-4'>КОНТАКТЫ</h1>
          <hr />
          <div className='flex px-3 py-5 items-start gap-2'>
            <BiMap className='text-green-400 w-8 h-8'  />
            <div>
              <p>Наш адрес:</p>
              <h4>МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</h4>
            </div>
          </div>
        </div>
        <div className='flex px-3 py-5 items-start gap-2'>
          <HiOutlineMail className='text-green-400 w-6 h-6' />
          <div>
            <p>Наша почта:</p>
            <h4>auto.wash@gmail.com</h4>
          </div>
        </div>
        <hr />
        <div className='flex items-center p-4 gap-10'>
          <button className='bg-green-400 rounded-xl'>ЗАБРОНИРОВАТЬ СТОЛ</button>
          <div>
            <h1 className='text-xl font-bold'>+7 (917) 510-57-59</h1>
            <p>Звоните или оставляйте заявку</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <h3 className='text-lg'>Мы в соц сетях:</h3>
          <div className='flex gap-3'>
            <GrFacebookOption className='w-6 h-6'/>
            <MdWhatsapp className=' w-6 h-6' />
            <BsYoutube className=' w-6 h-6'/>
            <BsInstagram className=' w-6 h-6'/>
          </div>
        </div>
      </div>
      <div className='relative right-[45vh] bottom-[20vh]'>
        <button className='bg-green-400 rounded-full text-center p-3'><BiMap className='text-white w-8 h-8'  /></button>
      </div>
    </div>
  )
}

import React from 'react'
import logo from '../../img/LOGO.png'
import { FaArrowUp } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='bg-[#403C3B] flex items-center  w-full text-white gap-[100px] p-[2vh]'>
            <div className=' rounded-full bg-white text-black ml-20' >
                <button className='p-4'><FaArrowUp/></button>
            </div>
            <div className='pt-10 pb-2 flex flex-col gap-2 '>
                <img src={logo} className='w-[150px]' alt="" />
                <p>© ООО СК «АПШЕРОН»</p>
                <p>Все права защищены. 2010-2020</p>
                <div className='flex flex-col gap-2'>
                <a href="a">Ползовательское соглашение</a>
                <a href="a">Карта сайта</a>
                <a href="a">Политика конфиденциальности</a>
                </div>
            </div>
            <div className='flex pl-6 gap-11'>
                <a href="a">О ресторане</a>
                <a href="a">Условия доставки</a>
                <a href="a">Возврат товара</a>
                <a href="a">Акция</a>
            </div>
        </div>
    )
}

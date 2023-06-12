import React, { useState } from 'react';
import logo from '../../img/LOGO.png';
import { BiSearch } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import ModalBasked from './ModalBasked';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClick = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="w-full bg-gray-800 px-4 py-3 h-20 flex items-center">
            <div className="w-full flex justify-between items-center text-white">
                <div className="flex items-center gap-20">
                    <img src={logo} alt="Logo" className="w-28 ml-8" />
                    <div className="relative flex gap-2">
                        <input
                            type="search"
                            className="bg-gray-700 text-white px-4 py-2 w-[450px] rounded focus:outline-none focus:ring focus:border-green-300"
                            placeholder="Поиск блюда..."
                        />
                        <button className="absolute right-0 top-0 bg-gray-700 text-white px-2 pt-3 rounded">
                            <BiSearch />
                        </button>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center">
                            <IoCall />
                        </button>
                        <div className="ml-2">
                            <p>Контакты:</p>
                            <a href="tel:+79175105759">+7 (917) 510-57-59</a>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-green-400 p-2 rounded-lg">
                    <button
                        className="text-white"
                        onClick={handleModalClick}
                    >
                        Корзина
                    </button>
                    {modalOpen && (
                        <div className={`modal z-50 ${modalOpen ? 'animate' : ''}`}>
                            <ModalBasked />
                        </div>
                    )}
                    <div className="h-8 w-0.5 bg-white"></div>
                    <span className="rounded-full bg-white text-black w-4 h-4 flex items-center justify-center px-1">0</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

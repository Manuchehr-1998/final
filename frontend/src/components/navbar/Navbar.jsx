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
    <div className="w-full bg-[#403C3B] px-4 py-3 h-20 flex items-center sm:w-full">
      <div className="w-full flex justify-between items-center text-white">
        <div className="flex items-center gap-20">
          {/* Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <img src={logo} alt="Logo" className="w-28 ml-10 sm:ml-0" />

          {/* Search Input */}
          <div className="relative hidden sm:flex gap-2">
            <input
              type="search"
              className="bg-gray-700 text-white px-4 py-2 w-[450px] rounded focus:outline-none focus:ring focus:border-green-300"
              placeholder="Поиск блюда..."
            />
            <button className="absolute right-0 top-0 bg-gray-700 text-white px-2 pt-3 rounded">
              <BiSearch />
            </button>
          </div>

          {/* Contact */}
          <div className="hidden sm:flex items-center">
            <button className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center">
              <IoCall />
            </button>
            <div className="ml-2">
              <p>Контакты:</p>
              <a href="tel:+79175105759">+7 (917) 510-57-59</a>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-3 bg-green-400 p-2 rounded-lg">
          <button className="text-white" onClick={handleModalClick}>
            Корзина
          </button>
          {modalOpen && (
            <div className={`modal z-50 ${modalOpen ? 'animate' : ''}`}>
              <ModalBasked />
            </div>
          )}
          <div className="h-8 w-0.5 bg-white hidden sm:block"></div>
          <span className="rounded-full bg-white text-black w-4 h-4 flex items-center justify-center px-1">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

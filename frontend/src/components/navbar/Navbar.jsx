import {
    Button,
    IconButton,
    Input,
} from "@material-tailwind/react";
import logo from '../../img/LOGO.png'
import { BiSearch } from 'react-icons/bi'
import { IoCall } from 'react-icons/io5'
import { useState } from "react";
import ModalBasked from "./ModalBasked";
export default function Navbar() {
    const [modalOpen, setModalOpen] = useState(false);


    const handleModalClick = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="w-full bg-[#403C3B] px-4 py-3 h-[80px] flex items-center">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
                <img src={logo} alt="Logos" className="w-[110px] h-[40px] ml-[96px]" />
                <div className="relative flex w-full gap-2 md:w-max">
                    <Input
                        type="search"
                        color="white"
                        label="Поиск блюдо..."
                        className="pr-20"
                        containerProps={{
                            className: "min-w-[450px] ml-[72px]",
                        }}
                    />
                    <IconButton
                        size="sm"
                        className="!absolute right-1 top-1  bg-[#403C3B]"
                    >
                        <BiSearch />
                    </IconButton>
                </div>
                <div
                    className="ml-[30px] flex gap-3 items-center mr-[750px] ">
                    <IconButton className="bg-green-400 rounded-full w-[32px] h-[32px]" >
                        <IoCall />
                    </IconButton>
                    <div>
                        <p>Контакты:</p>
                        <a href="number">+7 (917) 510-57-59</a>
                    </div>
                </div>

                <div
                    className="flex items-center bg-green-400 rounded-md  w-[150px] h-[52px] justify-center gap-3">
                    <Button
                        variant="text"
                        color="white"
                        onClick={handleModalClick}>
                        <p>Корзина</p>
                    </Button>
                    {modalOpen && (
                        <div className={`modal z-50 ${modalOpen ? "animate" : "" }`}>
                            <ModalBasked/>
                        </div>
                    )}
                    <div className="h-[38px] w-[1px] bg-white -ml-3"></div>
                    <span className="rounded-full  bg-white text-black w-6 h-6 flex items-center px-2">0</span>
                </div>
            </div>
        </div>
    );
}
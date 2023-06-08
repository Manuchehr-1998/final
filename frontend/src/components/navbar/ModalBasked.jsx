import {
    Card
} from "@material-tailwind/react";
import {MdOutlineAddShoppingCart} from 'react-icons/md'
export default function ModalBasked() {
    return (
        <Card className="fixed w-[450px] h-[350px] left-[38%] top-[25%] bg-[#403C3B]">
        <MdOutlineAddShoppingCart className="text-green-400 w-[45px] h-[45px] ml-[200px] mt-[110px] " />
            <h1 className="text-4xl text-center mt-[px] text-white">КОРЗИНА ПУСТАЯ</h1>
            <button className="bg-green-400 text-white w-[150px] p-2 ml-[155px] rounded-md mt-6">Посмотреть меню</button>
        </Card>
    );
}
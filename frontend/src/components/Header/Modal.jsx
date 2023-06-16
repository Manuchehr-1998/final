import { Card } from "@material-tailwind/react";
import basket from '../../assets/basket.svg'
export default function ModalBasked() {
  return (
    <Card className="fixed p-10 left-[38%] w-[30%] xs:w-[80%] xs:h-[40vh] top-[25%] bg-[#403C3B] xs:left-[10%] xs:top-[50%] ">
      <div className="xs:flex xs:flex-wrap xs:justify-center flex flex-wrap justify-center w-[100%] xs:w-[100%] xs:p-2">
      <img src={basket} alt=""  className=""/>
      <h1 className="text-4xl text-center  text-white xs:text-[20px]">КОРЗИНА ПУСТАЯ</h1>
      <button className="bg-green-400 text-white w-[80%] p-2 rounded-lg mt-6 xs:p-2">
        Посмотреть меню
      </button>
      </div>
    </Card>
  );
}

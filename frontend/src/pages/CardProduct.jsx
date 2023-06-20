import ColdFoods from '../components/category/foods/coldFood/ColdFoods';
import Dishs from '../components/category/foods/dish/Dishs';
import Drinks from '../components/category/foods/drink/Drinks';
import Fishs from '../components/category/foods/fish/Fishs';
import Grills from '../components/category/foods/grill/Grills';
import HotFoods from '../components/category/foods/hotFood/HotFoods';
import MeatFoods from '../components/category/foods/meatFood/MeatFoods';
import Soups from '../components/category/foods/soup/Soups';
import Home from './Home';

export default function CardProduct() {

  return (
    <div className="w-full bg-[#403C3B]">
      <Home />
      <div>
        <div
          className= 'flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">ХОЛОДНЫЕ ЗАКУСКИ</h1>
        </div>
        <ColdFoods />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">ГОРЯЧИЕ ЗАКУСКИ</h1>
        </div>
        <HotFoods />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">МЯСНЫЕ БЛЮДА</h1>
        </div>
         <MeatFoods />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">РЫБНЫЕ БЛЮДА</h1>
        </div>
        <Fishs />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">СУПЫ</h1>
        </div>
        <Soups />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">ГРИЛЬ МЕНЮ</h1>
        </div>
        <Grills />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">ФИРМЕННЫЕ БЛЮДА</h1>
        </div>
        <Dishs />
      </div>
      <div>
        <div
          className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
        >
          <div className="h-9 w-1 bg-green-400"></div>
          <h1 className="text-white">НАПИТКИ</h1>
        </div>
        <Drinks />
      </div>
    </div>
  );
}

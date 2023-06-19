import React, { useState, useEffect } from 'react';
import foto from '../assets/slider.png';
import foto1 from '../assets/stol2.jpeg';
import foto2 from '../assets/drinks (6).jpg';
import Category from '../components/category/Category';
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // handleNextSlide();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };



  return (
    <>
    <div className="relative">
      <img
        src={activeIndex === 0 ? foto : activeIndex === 1 ? foto1 : foto2}
        alt="slider"
        className="w-full h-[100vh]"
      />
      
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        <span
          className={`block h-1 cursor-pointer rounded-2xl transition-all bg-white/50 w-4 ${
            activeIndex === 0 ? 'bg-white w-8' : ''
          }`}
          onClick={() => handleSlideChange(0)}
        />
        <span
          className={`block h-1 cursor-pointer rounded-2xl transition-all bg-white/50 w-4 ${
            activeIndex === 1 ? 'bg-white w-8' : ''
          }`}
          onClick={() => handleSlideChange(1)}
        />
        <span
          className={`block h-1 cursor-pointer rounded-2xl transition-all bg-white/50 w-4 ${
            activeIndex === 2 ? 'bg-white w-8' : ''
          }`}
          onClick={() => handleSlideChange(2)}
        />
      </div>
      <h1 className="text-white absolute top-[200px] ml-[100px] w-[600px] italic font-normal text-5xl text-center transform -rotate-6">
        {activeIndex === 0
          ? 'ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА 60 МИНУТ'
          : activeIndex === 1
          ? 'ЗАКАЗ СТОЛ ДАЖЕ СИДЯ ДОМА'
          : 'ХОЛОДНЫЕ НАПИТКИ'}
      </h1>
      <button className="bg-green-400 text-white absolute top-[360px] px-2 py-2 ml-[280px]  italic font-normal text-2xl text-center transform -rotate-6">
        ЕЩЁ НЕ ПРОБОВАЛ?
      </button>
    </div>
    <section>
      <Category/>
    </section>
    </>
  );
}
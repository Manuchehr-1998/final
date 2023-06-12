import { Carousel } from "@material-tailwind/react";
import foto from '../../img/slider.png'
import foto1 from '../../img/stol2.jpeg'
import foto2 from '../../img/drinks (6).jpg'


export default function Slider() {
    return (
        <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )} >
            <div>
                <img src={foto} alt="image1" className="h-[660px] w-full object-cover" />
                <h1 className="text-white absolute top-[200px] ml-[100px] w-[600px] italic font-normal text-5xl text-center transform -rotate-6">
                    ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА 60 МИНУТ
                </h1>
                <button className=' bg-green-400 text-white absolute top-[360px] px-2 py-2  ml-[280px]  italic font-normal text-2xl text-center transform -rotate-6'>ЕЩЁ НЕ ПРОБОВАЛ?</button>
            </div>
            <div>
                <img src={foto1} alt="image2" className="h-[660px] w-full object-cover" />
                <h1 className="text-white absolute top-[200px] ml-[100px] w-[500px] italic font-normal text-5xl text-center transform -rotate-6">
                    ЗАКАЗ СТОЛ ДАЖЕ СИДЯ ДОМА
                </h1>
                <button className='bg-green-400 text-white absolute top-[320px] px-2 py-2 ml-[250px]  italic font-normal text-2xl text-center transform -rotate-6'>ЗАКАЗ МОЖНО ЗДЕСЬ</button>
            </div>
            <div>
                <img src={foto2} alt="image3" className="h-[660px] w-full object-cover" />
                <h1 className="text-white absolute top-[200px] ml-[240px] w-[100px] italic font-normal text-5xl text-center transform -rotate-6">
                    ХОЛОДНЫЕ НАПИТКИ
                </h1>
                <button className='bg-green-400 text-white absolute top-[320px] ml-[260px] px-2 py-2 italic font-normal text-2xl text-center transform -rotate-6'>ЕЩЁ НЕ ПРОБОВАЛ?</button>
            </div>
        </Carousel >
    );
}

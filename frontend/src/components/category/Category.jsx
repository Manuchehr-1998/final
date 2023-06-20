import React from "react";

const Category = () => {
  const categoryData = [
    {
      text: "Холодные закуски",
    },
    {
      text: "Горячие закуски",
    },
    {
      text: "Мясные блюда",
    },
    {
      text: "Супы",
    },
    {
      text: "Рыбные блюда",
    },
    {
      text: "Гриль меню",
    },
    {
      text: "Фирменные блюда",
    },
    {
      text: "Напитки",
    },
  ];
  return (
    <div className="flex justify-evenly w-[100%] h-[10vh] items-center bg-[#403C3B] border-b-2 border-gray-600 ">
      {categoryData.map((item, index) => (
        <div key={index}>
          <h6  className="text-[#CFCFCF] font-semibold hover:text-white hover:border-b-4 border-green-500 duration-300 py-6">
            {item.text}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default Category;

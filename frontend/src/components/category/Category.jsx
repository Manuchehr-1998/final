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
    <div className="flex justify-evenly w-[100%] h-[10vh] items-center bg-[#403C3B]">
      {categoryData.map((item, index) => (
    
          <div key={index}>
            <h6 className="text-[#CFCFCF]">{item.text}</h6>
          <hr className="hover:bg-[#618967] w-[100%] hover:h-[4px] bg-none" />
          </div>
        
      ))}
      <hr />
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decProduct, incProduct, removeProduct } from "../Reduser/basket";
import { AiFillDelete } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Trash = () => {
  const basket = useSelector(({ basket }) => basket.basket);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let count = 0;
    basket.forEach((elem) => {
      count += elem.quantity;
    });
    setTotalItems(count);
  }, [basket]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.forEach((elem) => {
      const productPrice = parseFloat(elem.product.price);
      totalPrice += elem.quantity * (isNaN(productPrice) ? 0 : productPrice);
    });
    return totalPrice.toFixed(2);
  };


  return (
    <div className="w-[100%] m-auto bg-[#403C3B]">
      <div>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-2xl text-white">Корзина</h1>
          <h2 className="text-green-400">в корзине: {totalItems} товаров</h2>
        </div>
        {basket.map((elem) => (
          <div key={elem.product.id}>
            <div className="flex justify-between px-6 py-3 items-center text-green-400">
              <div>
                <img src={elem.product.img} alt="" className="w-[200px] m-auto" />
              </div>
              <div>{elem.product.nameFood}</div>
              <div>
                <div className="flex gap-3">
                  <button onClick={() => dispatch(incProduct(elem.product.id))}>+</button>
                  <span className="text-xl">{elem.quantity}</span>
                  <button onClick={() => dispatch(decProduct(elem.product.id))}>-</button>
                </div>
              </div>
              <div>{elem.product.price}</div>
              <div>
                <span onClick={() => dispatch(removeProduct(elem.product.id))}>
                  <AiFillDelete className="text-green-400" />
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end pr-6 pt-4">
        <div>
        <p className="text-white">
            Общая сумма: {calculateTotalPrice()} сомони.
          </p>
          <Link to='order'>
            <button  className='bg-green-400 p-2 rounded-xl'>Оформить заказ</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Trash;

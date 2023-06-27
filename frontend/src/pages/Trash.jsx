import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decProduct, incProduct, removeProduct } from "../Reduser/basket";

const Trash = () => {
    const basket=useSelector(({basket})=> basket.basket)
   const dispatch =useDispatch()
    
   return (
    <div className="w-[100%] m-auto">
      <table>
        <caption>Korsin</caption>
        {
         basket.map((elem)=>(
            <thead>
            <tr>
              <td>
                <img src={elem.product.img} alt="" className="w-[10%] m-auto "/>
              </td>
              <td>{elem.product.nameFood}</td>
              <td>
                <div className="flex">
                  <button onClick={()=> dispatch(incProduct(elem.product.id))}>+</button>
                  <span>{elem.quantity}</span>
                  <button onClick={()=> dispatch(decProduct(elem.product.id))}>-</button>
                </div>
              </td>
              <td>{elem.product.price}</td>
              <td><span onClick={()=> dispatch(removeProduct(elem.product.id))}>&times;</span></td>
            </tr>
          </thead>
        )) 
        }
    
      </table>
    </div>
  );
}

export default Trash;

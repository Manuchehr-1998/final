import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import CardProduct from '../pages/CardProduct'
import DeliveryContacts from '../pages/DeliveryСontacts'
import ShoppingCart from '../pages/ShoppingCart'
import Stock from '../pages/Stock'

const Routers = () => {
  return (   
     <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/card-product' element={<CardProduct/>}/>
       <Route path='/delivery-contacts' element={<DeliveryContacts/>}/>
       <Route path='/shopping-cart' element={<ShoppingCart/>}/>
       <Route path='/stock' element={<Stock/>}/>
     </Routes>
  )
}

export default Routers

import React from 'react'
import About from './about/About'
import DishesOrder from './dishesOrder/DishesOrder'
import Footer from './footer/Footer'
import Menu from './menu/Menu'
import Navbar from './navbar/Navbar'
import Slider from './slider/Slider'

export default function Restaurant() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Menu />

      <About />
      <DishesOrder />
      <Footer />
    </div>
  )
}

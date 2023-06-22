import React from 'react'
import foto1 from '../../../assets/stock1.png'
import foto2 from '../../../assets/stock2.png'
import foto3 from '../../../assets/stock3.png'

export default function Product() {
     const stocks =  [
        {id:crypto.randomUUID, img:{foto1}, name:'Без мяса? Здесь!', about: ''}
     ]
  return (
    <div>Product</div>
  )
}

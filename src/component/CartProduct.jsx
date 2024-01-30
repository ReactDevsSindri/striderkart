import React from 'react'

const CartProduct = () => {
  return (
    <div style={{padding:'10px',display:'flex',alignItems:'end'}}>
        <img style={{width:'100px'}} src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e39c5f060224fb880ccd7cd55ae448e_9366/RAYRUN_SHOES_Blue_IQ9110_01_standard.jpg'/>
        <div style={{paddingLeft:'10px'}}>
            <p>Shoe1</p>
            <p>Qty:2</p>
        </div>
    </div>
  )
}

export default CartProduct
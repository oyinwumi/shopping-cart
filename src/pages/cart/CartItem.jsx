import React , { useContext }from 'react';
import  ShopContext  from "../../context/ShopContext" ;

import "./cart.css"

export default function CartItem(props) {
    const { id,  productName , price , productImage} = props.data;
    const {cartItems , addToCart, removeFromCart,updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='cart-item'>
      <img src={productImage} alt="shop items" />
       <div className='desription'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
       </div>
    </div>
  );
}

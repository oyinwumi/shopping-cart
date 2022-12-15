import React from 'react';
import   {PRODUCTS }  from '../../products';
import  Product  from "./Product";  
import "./shop.css"

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop-title'>
         <h1>Honeymix Store</h1>
      </div>
      <div className='products'>
         {PRODUCTS.map((product)=>(
            <Product data={product}/>
         ))}
      </div>
    </div>
  );
}

export default Shop;

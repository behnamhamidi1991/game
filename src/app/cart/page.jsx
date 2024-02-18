import React from 'react';
import './cart.scss';
import { production } from '@/data';
import Image from 'next/image';

const Cart = () => {
  const newProduction = production.filter((item) => item.id <= 3);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Cart</h2>
        <p>You can manage your cart</p>
      </div>
      <div className="cart-container">
        {newProduction.map((item) => (
          <div key={item.id} className="cart-item-box">
            <div className="cart-image-container">
              <Image src={item.img} alt={item.title} className="cart-image" />
            </div>
            <div className="cart-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p className="cart-price">Price: ${item.price}</p>
            </div>

            <div className="cart-button-container">
              <button>+</button>
              <span>0</span>
              <button>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

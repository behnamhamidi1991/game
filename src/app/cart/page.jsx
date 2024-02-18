'use client';
import React from 'react';
import './cart.scss';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  selectCart,
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
} from '@/features/cart/cartSlice';

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : cart.length === 1 ? (
          <p>There is 1 item in your cart</p>
        ) : (
          <p>There are {cart.length} items in your cart</p>
        )}
      </div>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item-box">
            <button
              className="remove-btn"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
            <div className="cart-image-container">
              <Image src={item.img} alt={item.title} className="cart-image" />
            </div>
            <div className="cart-content">
              <h3>{item.title}</h3>
              <p>{item.content.substring(0, 199)}</p>
              <p className="cart-price">Price: ${item.price}</p>
            </div>

            <div className="cart-button-container">
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleDecrement(item.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

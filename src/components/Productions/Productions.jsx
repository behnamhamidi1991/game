import React from 'react';
import './productions.scss';
import { production } from '@/data';
import Image from 'next/image';
import AddToCart from '../shared/AddToCart/AddToCart';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCart } from '@/features/cart/cartSlice';

const Productions = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleAddToCart = (game) => {
    dispatch(addToCart(game));
  };

  return (
    <div className="productions">
      <div className="header">
        <h2>The most popular games</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          alias.
        </p>
      </div>

      <div className="production-container">
        {production.map((game) => (
          <div key={game.id} className="game-box">
            <div className="image-container">
              <Image src={game.img} alt={game.title} className="image" />
            </div>
            <div className="content">
              <h3>{game.title}</h3>
              <p>{game.content.substring(1, 250)} ...</p>
              <div className="button-container">
                <div onClick={() => handleAddToCart(game)}>
                  <AddToCart className="add-to-cart-btn" />
                </div>
                <Link href={`/product/${game.id}`} className="read-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productions;

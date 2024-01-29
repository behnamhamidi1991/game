import React from "react";
import "./productions.scss";
import { production } from "@/data";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";

const Productions = () => {
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
              <p>{game.content}</p>
              <button>
                Buy the license <MdShoppingCart className="btn-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productions;
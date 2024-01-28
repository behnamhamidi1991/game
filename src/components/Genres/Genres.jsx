import React from "react";
import { genres } from "@/data";
import Image from "next/image";
import "./genres.scss";

const Genres = () => {
  return (
    <div className="genres">
      <div className="header">
        <h2>Game Genres</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          tempora?
        </p>
      </div>

      <div className="genres-container">
        {genres.map((item) => (
          <div key={item.id} className="genre-box">
            <Image src={item.img} alt={item.title} className="image" />
            <div className="content">
              <h4>{item.title}</h4>
              <p>{item.players}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;

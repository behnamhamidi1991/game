"use client";
import React, { useState } from "react";
import { genres } from "@/data";
import Image from "next/image";
import "./genres.scss";

const Genres = () => {
  const [hoverTitle, setHoverTitle] = useState(true);

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
            <div className="zoomIn">
              <Image src={item.img} alt={item.title} className="image" />
            </div>
            <div className="content">
              <h4 className="genre-title">{item.title}</h4>
              {/* <p>{item.players} Players</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;

import React from "react";
import "./competition.scss";
import Image from "next/image";
import gameImage from "../../../public/bg.jpg";
import { gamers } from "@/data";

const Competition = () => {
  return (
    <div className="competition">
      <div className="header">
        <h2>Competitions</h2>
        <p>Here is the hottest competition going on right now</p>
      </div>

      <div className="competition-container">
        <div className="left">
          <div className="image-box">
            <Image src={gameImage} alt="game" className="game-image" />
          </div>
          <div className="left-content">
            <h2>Battle Of Armagedon</h2>
            <p>
              Play the most famous action online game alongside the best players
              in the world
            </p>
            <div className="info">
              <p className="price">Price: 45.00</p>
              <p className="players">Total Number Players: 412</p>
              <p className="servers">Servers: 11</p>
              <p className="team">Team Player Game</p>
            </div>
            <button className="play-btn">Start Playing</button>
          </div>
        </div>
        <div className="right">
          {gamers.map((gamer) => (
            <div key={gamer.id} className="profile-box">
              <Image
                src={gamer.img}
                alt="profile"
                className={
                  gamer.online === true
                    ? "profile-image online-image"
                    : "profile-image offline-image"
                }
              />
              <span className={gamer.online === true ? "online" : "offline"}>
                {gamer.online === true ? "online" : "offline"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;

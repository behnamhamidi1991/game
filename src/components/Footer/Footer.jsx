import React from "react";
import "./footer.scss";
import Image from "next/image";
import icon from "../../../public/favicon.ico";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="header">
          <Image src={icon} width={100} height={100} alt="icon" />
          <h2>MetaGameR</h2>
        </div>

        <div className="middle">
          <ul className="links">
            <h3>Pages</h3>
            <li className="link">
              <a href="#">Home</a>
            </li>
            <li className="link">
              <a href="#">Blog</a>
            </li>
            <li className="link">
              <a href="#">Contact</a>
            </li>
            <li className="link">
              <a href="#">About</a>
            </li>
          </ul>
          <ul className="links">
            <h3>Community</h3>
            <li className="link">
              <a href="#">Hords</a>
            </li>
            <li className="link">
              <a href="#">Alliance</a>
            </li>
            <li className="link">
              <a href="#">Avernus</a>
            </li>
            <li className="link">
              <a href="#">Stormwind</a>
            </li>
          </ul>
          <ul className="links">
            <h3>Community</h3>
            <li className="link">
              <a href="#">Hords</a>
            </li>
            <li className="link">
              <a href="#">Alliance</a>
            </li>
            <li className="link">
              <a href="#">Avernus</a>
            </li>
            <li className="link">
              <a href="#">Stormwind</a>
            </li>
          </ul>
          <ul className="links">
            <h3>Community</h3>
            <li className="link">
              <a href="#">Hords</a>
            </li>
            <li className="link">
              <a href="#">Alliance</a>
            </li>
            <li className="link">
              <a href="#">Avernus</a>
            </li>
            <li className="link">
              <a href="#">Stormwind</a>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <h2>Join & Follow Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur praesentium saepe sunt, voluptas, id consectetur,
            adipisci ullam possimus reprehenderit quam voluptatem? Placeat iure,
            minus dolorum veritatis vel quia nam facilis?
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

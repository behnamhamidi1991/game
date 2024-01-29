import React from "react";
import "./footer.scss";
import Image from "next/image";
import icon from "../../../public/favicon.ico";
import { companies } from "@/data";

const Footer = () => {
  const getDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="header">
          <h2>MetaGamer Community</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            minima dolores rem enim dicta quo!
          </p>
          <div className="companies">
            {companies.map((item) => (
              <div key={item.id} className="image-container">
                <Image src={item.img} alt="game-companies" className="image" />
              </div>
            ))}
          </div>
        </div>

        <div className="middle">
          <ul className="links">
            <h3>Quick Links</h3>
            <li className="link">
              <a href="#">Home Page</a>
            </li>
            <li className="link">
              <a href="#">Cart Section</a>
            </li>
            <li className="link">
              <a href="#">Blog Page</a>
            </li>
            <li className="link">
              <a href="#">About Page</a>
            </li>
            <li className="link">
              <a href="#">Contact Page</a>
            </li>
          </ul>
          <ul className="links">
            <h3>Get Connected</h3>
            <li className="link">
              <a href="#">Connectivity</a>
            </li>
            <li className="link">
              <a href="#">Dashboard</a>
            </li>
            <li className="link">
              <a href="#">loT SIM Card</a>
            </li>
            <li className="link">
              <a href="#">Hologram Hyper</a>
            </li>
            <li className="link">
              <a href="#">Hologram Nova</a>
            </li>
          </ul>
          <ul className="links">
            <h3>Resources</h3>
            <li className="link">
              <a href="#">Using Hologram</a>
            </li>
            <li className="link">
              <a href="#">Docs Supported</a>
            </li>
            <li className="link">
              <a href="#">Supported Hardware</a>
            </li>
            <li className="link">
              <a href="#">High Valume Data</a>
            </li>
            <li className="link">
              <a href="#">Hologram Nova</a>
            </li>
          </ul>
          <ul className="links">
            <h3>Developers</h3>
            <li className="link">
              <a href="#">Forum Section</a>
            </li>
            <li className="link">
              <a href="#">Project Section</a>
            </li>
            <li className="link">
              <a href="#">Open Source</a>
            </li>
            <li className="link">
              <a href="#">Flexible Data</a>
            </li>
            <li className="link">
              <a href="#">Coverage Map</a>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <p>Copyright {getDate} - All rights for MetaGameR is reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./navbar.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navHeader">
        <h2>MetaGamer</h2>
        <p>Welcome Wizzards!</p>
      </div>
      <div className="icons">
        <ul>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';
import React, { useState } from 'react';
import './navbar.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaSquarePen } from 'react-icons/fa6';
import { MdShoppingCart } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';
import { RiHome2Fill } from 'react-icons/ri';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const cart = useSelector((state) => state.cart);

  return (
    <nav className={openMenu ? 'nav' : 'nav nav-closed'}>
      <button className="open-btn" onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? (
          <MdKeyboardArrowRight className="open-btn-icon" />
        ) : (
          <MdKeyboardArrowLeft className="open-btn-icon" />
        )}
      </button>
      {openMenu && (
        <div className="navHeader">
          <h2>MetaGameR</h2>
          <p>Welcome Wizzards!</p>
        </div>
      )}
      <div className="icons">
        <ul>
          <Link href="/" className="link-items">
            <RiHome2Fill className="icon" />
            {openMenu && <p>Homepage</p>}
          </Link>
          <Link href="/cart" className="link-items">
            <MdShoppingCart className="icon" />
            {openMenu && <p>Cart</p>}
            <span className={openMenu ? 'number open' : 'number closed'}>
              {cart.length}
            </span>
          </Link>
          <Link href="/" className="link-items">
            <FaUser className="icon" />
            {openMenu && <p>Dashboard</p>}
          </Link>
          <Link href="/" className="link-items">
            <FaSquarePen className="icon" />
            {openMenu && <p>Tickets</p>}
          </Link>
          <Link href="/" className="link-items">
            <MdOutlineSlowMotionVideo className="icon" />
            {openMenu && <p>Stream</p>}
          </Link>
          <Link href="/" className="link-items">
            <GiLaurelsTrophy className="icon" />
            {openMenu && <p>Competitions</p>}
          </Link>
          <Link href="/" className="link-items">
            <FaHeart className="icon" />
            {openMenu && <p>Likes</p>}
          </Link>
          <Link href="/" className="link-items">
            <IoLogOutSharp className="icon" />
            {openMenu && <p>Logout</p>}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

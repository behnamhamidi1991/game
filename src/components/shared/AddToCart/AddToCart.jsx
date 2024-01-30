"use client";
import React, { useState } from "react";
import "./add.scss";
import { MdShoppingCart } from "react-icons/md";

const AddToCart = () => {
  return (
    <>
      <button className="add-to-cart-btn">
        Buy the license <MdShoppingCart className="btn-icon" />
      </button>
    </>
  );
};

export default AddToCart;

import React from "react";
import { production } from "@/data";
import "./singleProduct.scss";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/shared/AddToCart/AddToCart";
import { IoMdHome } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { gamers } from "@/data";

const singleProduct = ({ params: { id } }) => {
  const newProduct = production.find((item) => item.id === id);

  const sidebarProduction = production.filter((item) => item.id !== id);

  const selectedComments = gamers.filter((item) => item.id <= 10);

  if (!newProduct) {
    return <div className="pl-20">This page does not exist!</div>;
  }
  return (
    <div className="single-product">
      <div className="single-product-container">
        {/* MAIN CONTENT */}
        <div className="main-content">
          <div className="main-content-top">
            <div className="main-content-header">
              <Image
                src={newProduct.img}
                alt={newProduct.title}
                className="main-content-image"
              />
              <h1>{newProduct.title}</h1>
              <p>{newProduct.content}</p>
            </div>
            <div className="main-content-footer">
              <div className="main-content-btn-container">
                <AddToCart />{" "}
                <span className="price">Price: ${newProduct.price}</span>
              </div>
              <div className="main-content-like-container">
                <button className="like">
                  <AiOutlineLike />
                  <span>289</span>
                </button>
                <button className="dislike">
                  <AiOutlineDislike />
                  <span>0</span>
                </button>
              </div>
            </div>
          </div>

          <div className="comments">
            <form>
              <textarea placeholder="Write your comment here ..." />
              <button>Submit</button>
            </form>

            <div className="posted-comments">
              {selectedComments.map((item) => (
                <div key={item.id} className="comments-container">
                  <div className="image-container">
                    <Image
                      src={item.img}
                      alt="profile-image"
                      className="profile-image"
                    />
                  </div>

                  <div className="comment-text">{item.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="recent-posts">
            <div className="header">
              <h2>Recent Posts</h2>
            </div>
            <div className="recent-posts-box">
              {sidebarProduction.map((item) => (
                <div key={item.id} className="post-box">
                  <div className="post-box-image-container">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="post-box-image"
                    />
                    <div className="recent-post-content">
                      <h3>{item.title}</h3>
                      <p>{item.content.substring(1, 89)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleProduct;

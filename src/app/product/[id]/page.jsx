import React from "react";
import { production } from "@/data";
import "./singleProduct.scss";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/shared/AddToCart/AddToCart";
import { IoMdHome } from "react-icons/io";
// Images
import profile1 from "../../../../public/users/1.jpg";
import profile2 from "../../../../public/users/2.jpg";
import profile3 from "../../../../public/users/3.jpg";
import profile4 from "../../../../public/users/4.jpg";
import profile5 from "../../../../public/users/5.jpg";

const singleProduct = ({ params: { id } }) => {
  const newProduct = production.find((item) => item.id === id);

  if (!newProduct) {
    return <div className="pl-20">This page does not exist!</div>;
  }
  return (
    <div className="single-product-container">
      <div className="main-content">
        <div className="image-container">
          <Image
            src={newProduct.img}
            alt={newProduct.title}
            className="product-image"
          />
        </div>
        <div className="product-content">
          <h1>{newProduct.title}</h1>
          <p>{newProduct.content}</p>
        </div>
        <div className="info">
          <AddToCart />
          <span>Price: ${newProduct.price}</span>
        </div>

        <div className="comments-section">
          <div className="comments-header">
            <h3>Comments</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, quasi.
            </p>
            <form className="comment-form">
              <textarea placeholder="Write your comment here ..." />
              <button className="submit-btn">Submit</button>
            </form>

            <div className="comments-post">
              <h4 className="posted-title">Posted Comments</h4>
              <div className="user-comment-box">
                <div className="user-image-box">
                  <Image
                    src={profile1}
                    alt="profile-picture"
                    className="user-image"
                  />
                </div>
                <div className="text-comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  dolore dolores aliquid! Perferendis molestias error nesciunt
                  eaque consequuntur dolor, explicabo est totam qui ipsum velit
                  praesentium earum fugiat eveniet! Enim!
                </div>
              </div>
              <div className="user-comment-box">
                <div className="user-image-box">
                  <Image
                    src={profile2}
                    alt="profile-picture"
                    className="user-image"
                  />
                </div>
                <div className="text-comment">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div className="user-comment-box">
                <div className="user-image-box">
                  <Image
                    src={profile3}
                    alt="profile-picture"
                    className="user-image"
                  />
                </div>
                <div className="text-comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  dolore dolores aliquid! Perferendis molestias error nesciunt.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="top">
          <Link href="/" className="homepage-btn">
            Go Back To Homepage <IoMdHome />{" "}
          </Link>
        </div>
        <Link href="/" className="other-productions">
          {production.map((item) => (
            <div key={item.id} className="post-box">
              <div className="image-box">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="sidebar-images"
                />
              </div>
              <div className="title">
                <h4>{item.title}</h4>
                <p>{item.content.substring(1, 89)} ...</p>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default singleProduct;

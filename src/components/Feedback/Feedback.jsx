"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { feedback } from "@/data";
import Image from "next/image";
import "./feedback.scss";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="header">
        <h2>Top Users Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          exercitationem.
        </p>
      </div>

      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {feedback.map((item) => (
            <SwiperSlide key={item.id} className="slide">
              <div className="image-container">
                <Image src={item.img} alt={item.username} className="image" />
              </div>
              <div className="content">
                <h4>{item.username}</h4>
                <p>{item.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;

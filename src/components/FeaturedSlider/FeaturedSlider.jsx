"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { featured } from "@/data";
import Image from "next/image";
import "./featured.scss";

const FeaturedSlider = () => {
  return (
    <div className="featured">
      <div className="slide-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
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
          {featured.map((slide) => (
            <SwiperSlide key={slide.id} className="slide">
              <Image
                src={slide.img}
                alt={slide.title}
                className="slide-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="genres"></div>
      </div>
    </div>
  );
};

export default FeaturedSlider;

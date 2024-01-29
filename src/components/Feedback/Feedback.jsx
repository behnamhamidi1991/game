"use client";
import React from "react";
import { feedback } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

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

      <div></div>
    </div>
  );
};

export default Feedback;

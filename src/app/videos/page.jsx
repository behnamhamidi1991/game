import React from "react";
import { Autoplay } from "swiper/modules";
import { videos } from "@/data";

const videosPage = () => {
  return (
    <>
      <div className="video-container">
        <div className="heade">
          <h1>Videos & Lives</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
            consequuntur.
          </p>
        </div>

        <div className="video-container">
          {videos.map((item) => (
            <iframe
              width="1560"
              height="815"
              src={item.src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"
              key={item.id}
            ></iframe>
          ))}
        </div>
      </div>
    </>
  );
};

export default videosPage;

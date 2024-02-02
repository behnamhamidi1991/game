import React from "react";
import { videos } from "@/data";
import "./videos.scss";

const videosPage = () => {
  return (
    <>
      <div className="video-container">
        <div className="header">
          <h1>Videos & Lives</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
            consequuntur.
          </p>
        </div>

        <div className="video-box">
          {videos.map((item) => (
            <div key={item.id} className="box">
              <iframe
                src={item.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default videosPage;

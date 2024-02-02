import React from "react";
import "./stream.scss";
import { stories } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Stream = () => {
  return (
    <div className="stream">
      <div className="header">
        <h2>Stream Box</h2>
        <p>
          Watch our players hottest stream live, you can start streaming for
          free
        </p>
      </div>

      <div className="video">
        <div className="video-container">
          {stories.map((item) => (
            <Link
              key={item.id}
              href={`/videos/${item.id}`}
              className="video-box"
            >
              <div className="profile">
                <Image
                  src={item.profileImg}
                  alt="profile"
                  className="profile-image"
                />
                <span>LIVE</span>
              </div>
              <div className="image-container">
                <Image src={item.storyImg} alt={item.title} className="image" />
              </div>
              <div className="content">
                <h4>{item.title}</h4>
                <p>{item.descrition}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stream;

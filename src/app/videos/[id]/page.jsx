"use client";
import React from "react";
import { stories } from "@/data";
import Link from "next/link";
import "./single-video.scss";
import Image from "next/image";
import { gamers } from "@/data";

const singleVideoPage = ({ params: { id } }) => {
  const selectedComments = gamers.filter((item) => item.id <= 10);

  const selectedStories = stories.filter((item) => item.id !== id);

  const videos = stories.find((item) => item.id === id);
  if (!videos) {
    return (
      <div className="page-container">
        <h1>Sorry!</h1>
        <p>This video does not exist or may be deleted!</p>
        <Link href="/">Go Back To Homepage</Link>
      </div>
    );
  }

  return (
    <div className="video-container">
      <div className="wrapper">
        <div className="main-content">
          <div className="video-box">
            <iframe
              src={videos.src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"
            ></iframe>
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
        {/* Sidebar */}
        <div className="sidebar">
          <div className="other-videos">
            {selectedStories.map((item) => (
              <Link
                href={`/videos/${item.id}`}
                key={item.id}
                className="other-videos-box"
              >
                <Image
                  src={item.storyImg}
                  alt={item.title}
                  className="sidebar-image"
                />
                <div className="sidebar-content">
                  <h3>{item.title}</h3>
                  <p>{item.descrition}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleVideoPage;

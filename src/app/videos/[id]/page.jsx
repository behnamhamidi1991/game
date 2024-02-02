import React from "react";
import { stories } from "@/data";
import Link from "next/link";

const singleVideoPage = ({ params: { id } }) => {
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
      <div className="header">
        <h1>{videos.title}</h1>
      </div>
    </div>
  );
};

export default singleVideoPage;

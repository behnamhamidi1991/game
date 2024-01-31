"use client";
import React, { useState } from "react";

const Like = ({ children }) => {
  const [like, setLike] = useState(1);

  const handleLike = () => {
    setLike(like + 1);
    return;
  };

  return <button onClick={handleLike}>{children}</button>;
};

export default Like;

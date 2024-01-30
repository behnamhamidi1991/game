import React from "react";
import loader from "../../../../public/spinner.svg";
import Image from "next/image";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Image
        src={loader}
        width={80}
        height={80}
        alt="loading"
        className="spinner"
      />
    </div>
  );
};

export default Spinner;

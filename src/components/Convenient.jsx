import React from "react";
import { style } from "../util/styles";
import { laptop } from "../assets";

const Convenient = () => {
  return (
    <div
      className={`${style.containerComponent} mb-28 sm:mb-24 sm:!py-16 md:!py-24 lg:!py-32 py-12 h-full`}
    >
      <div
        className={`w-full h-[300px] md:h-[450px] sm:h-[350px] lg:h-[606px] bg-blue ${style.fCol} rounded-[30px] relative items-center py-20`}
      >
        <h3 className={`${style.h3} !text-white mb-4`}>Easy and Convenient</h3>
        <hr className="max-w-[200px] bg-white md:h-2 h-1 md:w-full w-[100px] rounded-sm" />
        <img
          src={laptop}
          className={`sm:w-[80%] absolute md:top-[190px] lg:top-[210px] top-[150px]`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Convenient;

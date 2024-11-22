import React, { useState } from "react";
import { features } from "../util/constants";
import { style } from "../util/styles";
const Features = () => {
  const [hover, setHover] = useState(null);

  return (
    <div id="features" className={`${style.containerComponent} ${style.fCol} items-center`}>
      <span className={`${style.span} font-bold`}>What we offer</span>
      <h2 className={`${style.h2} sm:mb-14 md:mb-18 mb-10`}>
        Features & <span className="!text-blue">Services</span>
      </h2>
      <ul className={`${style.fA} gap-7 w-full`}>
        {features.map((i, idx) => {
          return (
            <li
              onMouseOver={() => setHover(i.id)}
              onMouseOut={() => setHover(null)}
              key={idx}
              className={`${style.fCol} ${
                hover === i.id ? "bg-blue" : "bg-white"
              } items-start border-img lg:p-10 p-5 cursor-pointer rounded-[40px] max-w-[400px] md:w-[45%] lg:w-full transition duration-150`}
            >
              <div
                className={`${style.fCol} items-center justify-center rounded-xl bg-white max-w-[130px] mb-4 sm:w-full md:w-[110px] lg:w-full w-[80px] max-h-[130px] sm:h-full md:h-[110px] lg:h-full h-[80px]`}
              >
                <img
                  className="max-w-[110px] mb-4 sm:w-full md:w-[90px] lg:w-full w-[60px]"
                  src={i.img}
                  alt=""
                />
              </div>
              {/* border-b-2 mb-3  */}
              <p
                className={`${style.p} ${
                  hover === i.id ? "!text-white" : "!text-blue"
                } md:mb-7 transition duration-150 mb-2 uppercase font-bold`}
              >
                {i.title}
              </p>
              <span
                className={`${style.span} ${
                  hover === i.id ? "!text-white" : ""
                } md:mb-16 mb-10 transition duration-150`}
              >
                {i.info}
              </span>
              <button
                className={`${style.span} !text-blue ${
                  hover === i.id ? "!text-white" : ""
                } transition duration-150`}
              >
                Learn more
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;

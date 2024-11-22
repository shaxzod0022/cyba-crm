import React, { useRef, useState } from "react";
import { style } from "../util/styles";
import { services } from "../util/constants";

const Services = () => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [stopSlide, setStopSlide] = useState(1);

  const rightBtn = () => {
    if (cardRef.current) {
      setWidth((i) => (i += cardRef.current.offsetWidth));
    }
    setStopSlide((services.length - 1) * cardRef.current.offsetWidth);
  };

  const leftBtn = () => {
    if (cardRef.current) {
      setWidth((i) => (i -= cardRef.current.offsetWidth));
    }
  };

  const disableTouch = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${style.containerComponent} ${style.fCol} items-center`}
      ref={containerRef}
    >
      <span className={`${style.span} font-bold`}>We are the best</span>
      <h2 className={`${style.h2} sm:mb-14 md:mb-18 mb-10`}>
        Why Choose CRM <span className="!text-blue">Services?</span>
      </h2>
      <ul
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className={`w-full rounded-xl border-[3px] border-blue bg-white grid grid-flow-col auto-cols-[100%] justify-between overflow-x-hidden mb-7`} // `overflow-x-hidden` bilan scrollni yashiramiz
        onTouchStart={disableTouch}
        onTouchMove={disableTouch}
        onTouchEnd={disableTouch}
      >
        {services.map((i, idx) => {
          return (
            <li
              key={idx}
              ref={cardRef}
              style={{ transform: `translateX(-${width}px)` }}
              className={`${style.fCol} transition-transform duration-500 p-5 sm:p-10 md:p-20 w-full items-center`}
            >
              <img
                src={i.img}
                className={`mb-7 max-w-[147px] w-[80px] sm:w-[100px] md:w-full`}
                alt=""
              />
              <p
                className={`${style.p} text-center !text-blue !font-bold mb-4`}
              >
                {i.title}
              </p>
              <span className={`${style.span} text-center max-w-[650px]`}>
                {i.info}
              </span>
            </li>
          );
        })}
      </ul>
      <div className={`${style.f} gap-4`}>
        <button
          onClick={leftBtn}
          disabled={width <= 0}
          className={`w-[40px] h-[40px] rounded-full border-2 ${
            width <= 0 ? "bg-blue" : "bg-white"
          } border-blue`}
        ></button>
        <button
          onClick={rightBtn}
          disabled={width >= stopSlide}
          className={`w-[40px] h-[40px] rounded-full border-2 ${
            width >= stopSlide ? "bg-blue" : "bg-white"
          } border-blue`}
        ></button>
      </div>
    </div>
  );
};

export default Services;

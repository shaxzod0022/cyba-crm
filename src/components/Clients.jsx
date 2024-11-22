import React, { useEffect, useRef, useState } from "react";
import { style } from "../util/styles";
import { userInfo } from "../util/constants";
import { userInfoTop } from "../assets";

const Clients = () => {
  const cardRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [stopSlide, setStopSlide] = useState(0);
  const visibleCards = 2;

  const rightBtn = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth / visibleCards;
      setWidth(
        (prevWidth) => prevWidth + cardWidth * visibleCards + 24 * visibleCards
      );
    }
  };

  const leftBtn = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth / visibleCards;
      setWidth(
        (prevWidth) => prevWidth - cardWidth * visibleCards - 24 * visibleCards
      );
    }
  };

  const disableTouch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth / visibleCards;
      setStopSlide((userInfo.length - visibleCards) * (cardWidth + 24));
    }
  }, []);

  return (
    <div className={`${style.containerComponent} ${style.fCol} items-center`}>
      <span className={`${style.span} text-center font-bold`}>
        Testimonials
      </span>
      <h2 className={`${style.h2} text-center sm:mb-14 md:mb-18 mb-10`}>
        What Our Clients <span className="!text-blue">Said?</span>
      </h2>
      <ul
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onTouchStart={disableTouch}
        onTouchMove={disableTouch}
        onTouchEnd={disableTouch}
        ref={cardRef}
        className={`w-full bg-white grid grid-flow-col md:auto-cols-[48%] auto-cols-[100%] gap-10 overflow-x-hidden mb-7`}
      >
        {userInfo.map((i, idx) => {
          return (
            <li
              key={idx}
              style={{ transform: `translateX(-${width}px)` }}
              className={`${style.fCol} cursor-pointer rounded-md md:w-[full] w-full border-[2px] transition-transform duration-500 p-5 sm:p-10 md:p-10 items-start gap-7`}
            >
              <img src={userInfoTop} alt="" />
              <p className={`${style.p} !text-priceBlack !text-[20px]`}>
                {i.title}
              </p>
              <span className={`${style.span} !text-[18px]`}>{i.info}</span>
              <div className={`${style.f} gap-3`}>
                <img src={i.userImg} alt="" />
                <div className={`${style.fCol}`}>
                  <p className={`${style.p} !text-[18px]`}>{i.fulName}</p>
                  <span className={`${style.span} !text-[16px]`}>{i.sity}</span>
                </div>
              </div>
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

export default Clients;

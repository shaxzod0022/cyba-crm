import React, { useRef, useState } from "react";
import { AboutImg, RightArrow } from "../assets";
import { style } from "../util/styles";
import { aboutInfo } from "../util/constants";

const About = () => {
  const cardRef = useRef(null);
  let cardNumber = 1;
  const [width, setWidth] = useState(0);

  const rightBtn = () => {
    if (cardRef.current) {
      setWidth((i) => (i += cardRef.current.offsetWidth));
    }
  };

  const disableTouch = (e) => {
    e.preventDefault();
  };
  console.log(width);

  if (width >= 4410) {
    setWidth(0);
  }

  return (
    <div
      id="about"
      className={`${style.containerComponent} ${style.fB} xl:flex-row flex-col-reverse gap-4 md:!py-30 xl:!py-40 py-20`}
    >
      <div className={`xl:w-[48%] w-full`}>
        <div
          className={`sm:rounded-[50px] rounded-[40px] p-2 w-full border-img`}
        >
          <img className="w-full h-full" src={AboutImg} alt="" />
        </div>
      </div>
      <div className={`xl:w-[48%] w-full ${style.fCol} gap-5`}>
        <div>
          <p className={`${style.p} uppercase !font-bold !text-blue`}>
            About Us
          </p>
          <div className={`w-full z-10 bg-backgroundAboutImg h-[2px] relative`}>
            <span
              style={{ transform: `translateX(${width / aboutInfo.length}px)` }}
              className={`z-20 h-[2px] rounded-full w-[100px] transition duration-500 bg-blue  absolute`}
            ></span>
          </div>
        </div>
        <ul
          onTouchStart={disableTouch}
          onTouchMove={disableTouch}
          onTouchEnd={disableTouch}
          className={`grid touch-none overflow-hidden grid-flow-col auto-cols-[100%] justify-between overflow-x-auto`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {aboutInfo.map((i, idx) => {
            return (
              <li
                key={idx}
                style={{ transform: `translateX(-${width}px)` }}
                className="touch-none transition-transform duration-500"
                ref={cardRef}
              >
                <h3 className={`${style.h3} mb-5`}>{i.title}</h3>
                <p className={`${style.span}`}>{i.info}</p>
              </li>
            );
          })}
        </ul>
        <button
          onClick={rightBtn}
          className={`text-blue cursor-pointer transition hover:scale-105 active:scale-100 font-[700] ${style.f} gap-2 sm:text-[1rem] text-[14px]`}
        >
          <span>Book 30 Minutes FREE Consultation</span>
          <img src={RightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default About;

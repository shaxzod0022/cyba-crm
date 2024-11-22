import React from "react";
import { style } from "../util/styles";
import Button from "./Button";
import { BtnPlay, HeadImg, HeadImg2 } from "../assets";

const Head = () => {
  let sum = [1, 2, 3, 4, 5];

  return (
    <div
      id="home"
      className={`${style.fB} ${style.containerComponent} lg:!pt-[190px] md:!pt-[100px] !pt-[70px] gap-4`}
    >
      <div className={`${style.fCol} xl:w-[50%] w-full gap-5`}>
        <h1 className={`${style.h1}`}>
          Strengthen your client Relationships with our{" "}
          <span className="text-blue">CRM Solutions</span>
        </h1>
        <p className={`${style.p}`}>
          Well we’re setting the record straight, this is not just another
          CRM...Its time re-focus on your contacts{" "}
        </p>
        <div className={`${style.f} sm:gap-5 gap-2`}>
          <Button title={"Try it for FREE"} btnClass={``} />
          <button
            className={`${style.f} sm:text-[1rem] text-[14px] sm:gap-3 gap-1 transition hover:scale-110 text-blue font-[500]`}
          >
            <img className="sm:w-[46px] w-[35px] " src={BtnPlay} alt="" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <div className={`xl:w-[45%] w-full ${style.f} justify-end relative`}>
        <img
          className="xl:w-[85%] lg:!h-full w-full z-10"
          src={HeadImg}
          alt=""
        />
        <div className={`${style.fCol} absolute left-0 bottom-20 z-0`}>
          {sum.map((item, idx) => {
            return (
              <img key={idx} className="w-72 mb-3" src={HeadImg2} alt="" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Head;

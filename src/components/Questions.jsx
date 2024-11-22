import React from "react";
import { style } from "../util/styles";
import { add } from "../assets";

const Questions = () => {
  return (
    <div
      className={`${style.containerComponent} ${style.fCol} items-center  md:!py-30 xl:!py-40 py-20`}
    >
      <span className={`${style.span} text-center font-bold`}>We answered</span>
      <h2 className={`${style.h2} text-center sm:mb-14 md:mb-18 mb-10`}>
        Frequently Asked <span className="!text-blue">Questions</span>
      </h2>
      <div className={`sm:w-[85%] w-full`}>
        <p className={`${style.p} mb-5 !text-priceBlack !font-semibold`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, commodi?
        </p>
        <span className={`${style.span}`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </span>
        <div className={`${style.fB} mt-12 mb-8`}>
          <p className={`${style.p} !text-priceBlack !font-semibold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </p>
          <button className={`hover:scale-110 active:scale-100`}>
            <img src={add} alt="" />
          </button>
        </div>
        <div className={`${style.fB} mb-8`}>
          <p className={`${style.p} !text-priceBlack !font-semibold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            moll?
          </p>
          <button className={`hover:scale-110 active:scale-100`}>
            <img src={add} alt="" />
          </button>
        </div>
        <div className={`${style.fB} mb-8`}>
          <p className={`${style.p} !text-priceBlack !font-semibold`}>
            What CRM services do you offer?
          </p>
          <button className={`hover:scale-110 active:scale-100`}>
            <img src={add} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;

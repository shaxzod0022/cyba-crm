import React, { useState } from "react";
import { style } from "../util/styles";
import { pricing } from "../util/constants";
import { galchka, galchkaWhite } from "../assets";
import Button from "./Button";

const Pricing = () => {
  const [hover, setHover] = useState(null);
  return (
    <div
      id="pricing"
      className={`${style.containerComponent} ${style.fCol} items-center sm:!py-16 md:!py-0 lg:!py-32 py-0`}
    >
      <h3 className={`${style.h3} mb-4`}>Our Pricing Plans</h3>
      <span className={`${style.span} max-w-[550px] text-center mb-16`}>
        Our affordable pricing plan is lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime
      </span>
      <ul className={`${style.fA} gap-6`}>
        {pricing.map((i, idx) => {
          return (
            <li
              key={idx}
              onMouseOver={() => setHover(i.id)}
              onMouseOut={() => setHover(null)}
              className={`${style.fCol} ${
                hover === i.id ? "bg-blue scale-110" : "bg-white"
              } gap-5 items-start transition duration-150 cursor-pointer border-[3px] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 border-blue`}
            >
              <p
                className={`${style.p} ${
                  hover === i.id ? "!text-white" : "!text-priceBlack"
                } !font-[500]`}
              >
                {i.title}
              </p>
              <h3
                className={`${style.h3} ${
                  hover === i.id ? "!text-white" : "!text-priceBlack"
                }`}
              >
                {i.price}
              </h3>
              <span
                className={`${style.span} ${
                  hover === i.id ? "!text-white" : "!text-priceBlack"
                }`}
              >
                {i.info}
              </span>
              <ul className={`${style.fCol} gap-2`}>
                {i.completeds.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${style.f} flex-nowrap gap-3 max-w-[300px]`}
                    >
                      <img
                        src={hover === i.id ? galchkaWhite : galchka}
                        alt=""
                      />
                      <span
                        className={`${style.span} !text-[15px] ${
                          hover === i.id ? "!text-white" : ""
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Button
                title={`Get Started`}
                btnClass={`!bg-white border-2 border-blue !text-blue`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pricing;

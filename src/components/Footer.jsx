import React from "react";
import { style } from "../util/styles";
import { footerApc, footerData } from "../util/constants";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <div
      className={`${style.containerComponent} ${style.fCol} md:items-start items-center`}
    >
      <div
        className={`${style.f} w-full md:justify-between justify-around border-t-2 !items-start gap-10 md:!pt-20 pt-10`}
      >
        {footerData.map((i, idx) => {
          return (
            <ul
              key={idx}
              className={`${style.fCol} md:items-start items-center md:w-auto w-full gap-8`}
            >
              <p className={`${style.p} !font-semibold !text-footerLinkColor`}>
                {i.title === "" ? (
                  <img
                    src={Logo}
                    className="max-w-[185px] sm:w-full w-[120px]"
                    alt=""
                  />
                ) : (
                  i.title
                )}
              </p>
              <ul className={`${style.fCol} md:items-start items-center gap-2`}>
                {i.links.map((link, index) => {
                  return (
                    <li key={index} className={`${style.span} hover:text-blue`}>
                      <a href="">{link.title}</a>
                    </li>
                  );
                })}
              </ul>
            </ul>
          );
        })}
      </div>
      <ul className={`${style.f} gap-4 mt-5`}>
        {footerApc.map((i, idx) => {
          return (
            <li
              key={idx}
              className={`${style.fCol} items-center justify-center hover:scale-105 active:scale-100 transition duration-150 bg-blue w-[35px] h-[35px] cursor-pointer rounded-md`}
            >
              <img src={i.img} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;

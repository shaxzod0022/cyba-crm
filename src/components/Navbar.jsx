import React, { useState } from "react";
import { Bar, Logo } from "../assets";
import { style } from "../util/styles";
import { navbarLink } from "../util/constants";
import Button from "./Button";
import SaidBar from "./SaidBar";

const Navbar = () => {
  const [showBar, setShowBar] = useState("-right-[378px] -top-[110vh]");
  const showSaidBar = () => {
    setShowBar((prev) =>
      prev === "-right-[378px] -top-[110vh]"
        ? "-right-0 top-0"
        : "-right-[378px] -top-[110vh]"
    );
  };

  return (
    <div
      className={`w-full navbar-box-shadow bg-white fixed ${style.fB} gap-3 ${style.containerComponent} max-w-[1440px] z-50`}
    >
      <a href="/">
        <img className="max-w-[185px] sm:w-full w-[120px]" src={Logo} alt="" />
      </a>
      <div className={`${style.fB} lg:gap-14 gap-7 md:flex hidden`}>
        <ul className={`${style.fB} lg:gap-14 gap-7 `}>
          {navbarLink.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  href={`#${item.id}`}
                  className={`${style.link} hover:text-blue transition`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button
          title={"Contact Us"}
          btnClass={`!border-blue !bg-white hover:!bg-blue hover:!text-white !text-blue`}
        />
      </div>
      <button onClick={showSaidBar} className="md:hidden block">
        <img className="w-7" src={Bar} alt="" />
      </button>
      <SaidBar onClick={showSaidBar} barClass={`${showBar}`} />
    </div>
  );
};

export default Navbar;

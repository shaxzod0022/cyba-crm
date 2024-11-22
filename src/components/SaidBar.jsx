import React from "react";
import { navbarLink } from "../util/constants";
import { style } from "../util/styles";
import Button from "./Button";
import { Close } from "../assets";

const SaidBar = ({ barClass, onClick }) => {
  return (
    <div
      className={`w-[60%] h-[100vh] ${style.fCol} ${barClass} md:hidden flex transition-[1s] duration-500 justify-between p-2 border-2 bg-white absolute`}
    >
      <button onClick={onClick} className="absolute w-10 right-2 top-1.5">
        <img className="w-full" src={Close} alt="" />
      </button>
      <ul className={`${style.fCol} mt-3`}>
        {navbarLink.map((item, idx) => {
          return (
            <li key={idx} className="p-1">
              <a
                href={`#${item.id}`}
                className={`${style.link} hover:text-blue`}
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
  );
};

export default SaidBar;

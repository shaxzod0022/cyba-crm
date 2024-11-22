import React from "react";

const Button = ({ title, btnClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 active:bg-blue active:text-white sm:text-[1rem] text-[14px] transition sm:font-[600] font-[400] sm:px-[20.51px] px-[1rem] sm:py-[13.68px] py-[9px] rounded-lg bg-blue hover:bg-white hover:text-blue text-white hover:border-blue ${btnClass}`}
    >
      {title}
    </button>
  );
};

export default Button;

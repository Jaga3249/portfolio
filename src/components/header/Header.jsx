import React from "react";
import headerlogo from "../../components/../assets/header-logo.png";

const Header = () => {
  return (
    <div className="bg-[#c082f4] h-[10vh] flex justify-between items-center px-5">
      <div className="flex justify-start items-center bg-[#928f95] rounded-full cursor-pointer shadow-md">
        <img src={headerlogo} alt="" className="h-12 w-12 " />
      </div>
      <div className="flex justify-center items-center gap-5 pr-16 cursor-pointer text-lg text-gray-700  ">
        <span className="hover:py-2 px-5 hover:bg-[#B49EC6] hover:rounded-md hover:shadow-md flex justify-center items-center ">
          Home
        </span>
        <span className="hover:py-2 px-5 hover:bg-[#B49EC6] hover:rounded-md hover:shadow-md flex justify-center items-center ">
          Resume
        </span>
        <span className="hover:py-2 px-5 hover:bg-[#B49EC6] hover:rounded-md hover:shadow-md flex justify-center items-center ">
          About
        </span>
        <span className="hover:py-2 px-5 hover:bg-[#B49EC6] hover:rounded-md hover:shadow-md flex justify-center items-center ">
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;

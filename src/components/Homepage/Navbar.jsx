import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex sm:justify-between justify-center items-center sm:flex-row  flex-col p-4 bg-[081D32] text-white md:w-[1440px] mx-auto sm:w-[100%] sm:space-x-5 w-[90%]">
        <div className="flex items-center space-x-2 text-3xl font-bold text-[#3B8FE9] pb-[15px] sm:pb-0">
          <img src="../src/assets/logo.jpeg" alt=""  className="w-[45px] h-[45px]"/>
          <h1>QuantumBAY</h1>
        </div>
        <div className="sm:space-x-6  space-x-5 text-[12px] sm:text-lg flex items-center">
          <a href="" className="">
            Services
          </a>
          <a href="">WhyUs</a>
          <a href="">WhyNow </a>
          <a
            href="#"
            className="px-[20px] py-[10px] rounded-[12px] hover:rounded-[30px] bg-[#1197DF] transition-all duration-200"
          >
            ContactUs
          </a>
        </div>
      </nav>
    </div>
  );
};

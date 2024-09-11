import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="relative top-0 z-10 w-full bg-white py-5 shadow-lg">
      <div className="container mx-auto items-center flex justify-evenly">
        <Link to="/" className="logo font-bold text-[2rem]">
          <img src="./logo.png" alt="logo img" className="w-[100px]" />
        </Link>

        <ul
          dir="rtl"
          className={`flex md:absolute justify-evenly items-center gap-10 
          md:top-[100%] md:flex-col md:bg-[var(--second-color)] md:w-full md:p-5 md:h-[50vh] z-10
          transition-left duration-500 ${
            isNavOpen ? "md:left-0" : "left-[-100vh]"
          }`}
        >
          <li
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <Link
              className="md:text-white font-bold text-[1.5rem] hover:text-[var(--main-color)] transtion-text duration-500"
              to="/"
            >
              الرئيسة
            </Link>
          </li>
          <li
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <Link
              className="md:text-white font-bold text-[1.5rem] hover:text-[var(--main-color)] transtion-text duration-500"
              to="/services"
            >
              خدماتنا
            </Link>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center">
          <div
            className="bars hidden md:block text-[2rem]"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <i
              className={`fa-solid ${isNavOpen ? "fa-xmark" : " fa-bars"}`}
            ></i>
          </div>

          <button
            className="group relative py-3 px-10 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
              before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[var(--second-color)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
          >
            <Link to="contact" className="text-[22px] text-white">
              احجز جلستك الآن
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

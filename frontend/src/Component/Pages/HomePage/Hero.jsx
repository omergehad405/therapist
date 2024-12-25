import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="h-[80vh] md:h-[100vh] relative md:mt-[5rem]">
      <div className="container absolute top-[50%] md:gap-10 translate-y-[-50%] mx-auto flex flex-wrap items-center justify-between">
        <div className="w-[50%] md:w-full text-center p-10 flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[2rem] capitalize">
            يطمئن المرء منا إذا وازن بين حاجات روحه ومتطلبات جسده..
          </h1>
          <h3 className="font-bold text-[22px] py-5 text-[var(--second-color)]">
            يَشُدُّ بَعْضُهُ بَعْضًا <br /> رحلة التعافي تبدأ بخطوة، يدًا بيدٍ
            نحوَ حياةٍ أفضل.
          </h3>
          <button
            className="group relative py-3 px-3 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
              before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[var(--second-color)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
          >
            <Link to="contact" className="text-[22px] text-white">
              احجز جلستك الآن
            </Link>
          </button>
        </div>
        <div className="w-[50%] md:w-full flex items-center justify-center">
          <img
            src="./home.jpg"
            alt="home img"
            className="w-[450px] md:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

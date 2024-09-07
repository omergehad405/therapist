import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero h-[100vh] relative mb-[10rem] sm:mb-[20rem] sm:mt-[7rem]">
      <div className="container absolute mx-auto ">
        <div className="min-h-[50vh] text-center p-10 flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[2rem] capitalize">
            أنت تستحق السلام الداخلي، ونحن هنا لمساعدتك على الوصول إليه
          </h1>
          <h3 className="font-bold text-[22px] py-5 text-[var(--second-color)]">
            رحلة التعافي تبدأ هنا، خطوة بخطوة نحو حياة أفضل
          </h3>
          <div className="flex flex-wrap md:gap-5 items-center justify-evenly">
            <button
              className="group relative py-3 px-10 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
              before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[var(--second-color)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
            >
              <Link to="contact" className="text-[22px] text-white">
                ابدا الان
              </Link>
            </button>
          </div>
        </div>
        <div className="min-h-[50vh] text-center p-10 flex flex-col items-center justify-center gap-20 bg-[#eee]">
          <div className="flex flex-wrap items-center justify-center w-full gap-2">
            <div className="bg-[var(--main-color)] relative after:absolute after:bg-[var(--second-color)] after:w-[20px] after:h-[20px] after:top-[0] after:right-[0]  w-[350px] gap-5 h-[100px] flex text-white font-bold items-center justify-center">
              استشارات نفسية فردية
            </div>
            <div className="bg-[var(--main-color)] relative after:absolute after:bg-[var(--second-color)] after:w-[20px] after:h-[20px] after:top-[0] after:right-[0]  w-[350px] gap-5 h-[100px] flex text-white font-bold items-center justify-center">
              جلسات كوتشينج للأم والطفل
            </div>
            <div className="bg-[var(--main-color)] relative after:absolute after:bg-[var(--second-color)] after:w-[20px] after:h-[20px] after:top-[0] after:right-[0]  w-[350px] gap-5 h-[100px] flex text-white font-bold items-center justify-center">
              جلسات دعم فردية وجماعية
            </div>
            <div className="bg-[var(--main-color)] relative after:absolute after:bg-[var(--second-color)] after:w-[20px] after:h-[20px] after:top-[0] after:right-[0]  w-[350px] gap-5 h-[100px] flex text-white font-bold items-center justify-center">
              ورش عمل تربوية
            </div>
            <div className="bg-[var(--main-color)] relative after:absolute after:bg-[var(--second-color)] after:w-[20px] after:h-[20px] after:top-[0] after:right-[0]  w-[350px] gap-5 h-[100px] flex text-white font-bold items-center justify-center">
              دورات تدريبية
            </div>
          </div>
          <button
            className="group relative py-3 px-10 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
              before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[var(--second-color)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
          >
            <Link to="contact" className="text-[22px] text-white">
              ابدا الان
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

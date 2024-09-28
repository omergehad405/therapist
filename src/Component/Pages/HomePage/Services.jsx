import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="container my-[15rem] mx-auto ">
        <div className="text-center p-10 flex flex-col items-center justify-center gap-20 bg-[#eee]">
          <h1 className="blog-title font-bold text-center text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-[var(--main-color)] mx-auto w-[fit-content]">
            خدماتي
          </h1>
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
          <button className="group relative py-3 px-10 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg">
            <Link to="services" className="text-[22px] text-white">
              تعرف على المزيد
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;

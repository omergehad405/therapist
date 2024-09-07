import React from "react";

function Subscription() {
  return (
    <div className="mt-10">
      <div className="container bg-[#ddd] w-full h-[300px] p-5 flex flex-col justify-center items-center gap-20">
        <div>
          <h1 className="text-center font-bold text-[var(--main-color)] text-[2rem]">
            احصل علي كل جديد
          </h1>
          <p className="text-[var(--second-color)] text-[2rem]">
            اشترك الان لتصلك كل المقالات و العروض الجديده
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="بريدك الالكتروني"
            dir="rtl"
            className="p-3 md:w-[250px] w-[450px] text-[1rem] rounded-l-md border-0 focus:outline-0"
          />
          <button className="p-3 bg-[var(--main-color)] rounded-r-md text-white">
            اشترك الان
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

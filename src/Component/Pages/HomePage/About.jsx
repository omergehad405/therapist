import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./HomePage.css";
import "swiper/css";
import "swiper/css/pagination";

function About() {
  return (
    <section className="relative min-h-[80vh] ">
      <div className="container rounded-lg mx-auto h-full flex flex-wrap justify-between md:flex-col-reverse items-center flex-wrap w-[95%] p-8 md:p-3 bg-[var(--second-color)]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="relative shadow-xl w-[45%] md:w-[100%] h-[500px] rounded-lg md:w-full bg-[#eee]"
        >
          <SwiperSlide className=" top-[50%] text-center">
            الشهاده الاولي
          </SwiperSlide>
          <SwiperSlide className=" top-[50%] text-center ">
            الشهاده الثانيه
          </SwiperSlide>
          <SwiperSlide className=" top-[50%] text-center ">
            الشهاده الثالثة
          </SwiperSlide>
        </Swiper>

        <div className="w-[50%] md:w-full md:my-5">
          <h1 className=" relative font-bold text-[3rem] text-white text-center">
            من انا
          </h1>
          <h3 className="border-y-2 border-[var(--main-color)] text-[#ddd] my-2 w-[fit-content] mx-auto p-4">
            تفاصيل الشخص
          </h3>

          <div className="text-right">
            <h2 className="py-2 text-[1.5rem] text-white">...عن الشخص</h2>
            <ul dir="rtl" className="text-[#777] mt-5 mr-5">
              <li className="text-[1.2rem] pb-3">امتيازات الشخص</li>
              <li className="text-[1.2rem] pb-3">امتيازات الشخص</li>
              <li className="text-[1.2rem] pb-3">امتيازات الشخص</li>
              <li className="text-[1.2rem] pb-3">امتيازات الشخص</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

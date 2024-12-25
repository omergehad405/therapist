import React, { useEffect } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Blogs from "../HomePage/Blogs";
function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="min-h-[80vh] relative sm:mt-[7rem]">
        <h1 className="relative mt-[5rem] sm:mt-[10rem] text-[3rem] font-bold text-[var(--second-color)] text-center">
          خدماتنا
        </h1>
        <p className="mb-[6rem] mt-5 text-[2rem] text-[#777] text-center md:text-[1.5rem]">
          هدفي هو تقديم الدعم والإرشاد لتحقيق الصحة النفسية والتربوية في بيئة
          داعمة وسرية
        </p>
        <div className="container mx-auto my-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                استشارات نفسية فردية
              </h1>
              <p className=" text-[var(--second-color)] ">
                جلسات استشارية مخصصة لمساعدتك في التغلب على التحديات النفسية
              </p>
            </div>
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                جلسات كوتشينج للأم والطفل
              </h1>
              <p className=" text-[var(--second-color)] ">
                دعم وتوجيه للأمهات والأطفال لتعزيز العلاقة وتطوير المهارات.
              </p>
            </div>
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                جلسات دعم فردية وجماعية
              </h1>
              <p className=" text-[var(--second-color)] ">
                جلسات دعم نفسي فردية وجماعية لتبادل الخبرات والحصول على الدعم
                اللازم
              </p>
            </div>
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                استشارات أسرية وزوجية
              </h1>
              <p className=" text-[var(--second-color)] ">
                تقديم إرشادات وحلول لتحسين العلاقات الأسرية والزوجية
              </p>
            </div>
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                دورات تدريبية مهارية تفاعلية للأطفال
              </h1>
              <p className=" text-[var(--second-color)] ">
                دورات تفاعلية لتطوير مهارات الأطفال في بيئة تعليمية ممتعة.
              </p>
            </div>
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                ورش عمل تربوية
              </h1>
              <p className=" text-[var(--second-color)] ">
                ورش عمل تفاعلية لتطوير مهاراتك التربوية.
              </p>
            </div>
            <div className="w-[300px] border-4 border-[var(--second-color)] transition-border flex flex-col gap-20 justify-center items-center duration-500 hover:border-[var(--main-color)] relative h-[300px] rounded-md shadow-2xl p-5 text-center">
              <h1 className="text-[var(--main-color)] font-bold text-2xl">
                دورات تدريبية
              </h1>
              <p className=" text-[var(--second-color)] ">
                دورات تدريبية لتعزيز الصحة النفسية والتربوية.
              </p>
            </div>
          </div>
          <div className="">
            <div className="bg-[#ddd] w-full h-[300px] p-5 flex flex-col justify-center items-center gap-20">
              <h1 className="text-center font-bold text-[var(--second-color)] text-[2rem]">
                تواصل معنا لتجد الدعم الذي تحتاجه.
              </h1>
              <div>
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
          </div>
        </div>
      </div>
      <Blogs />
    </div>
  );
}

export default ServicesPage;

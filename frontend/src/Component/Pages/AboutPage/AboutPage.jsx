import React, { useEffect } from "react";
import Blogs from "../HomePage/Blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="min-h-[80vh] relative sm:mt-[7rem]">
        <h1 className="relative mt-[5rem] sm:mt-[10rem] text-[3rem] font-bold text-[var(--second-color)] text-center">
          تعرف علي قصتي
        </h1>
        <p className="mb-[6rem] mt-5 text-[2rem] text-[#777] text-center md:text-[1.5rem]"></p>
        <div className="container mx-auto my-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          <div dir="rtl">
            <h1 className="blog-title font-bold text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-[var(--main-color)] w-[fit-content]">
              من انا
            </h1>
            <p className=" md:text-[13px] text-[#9f9f9f] my-2 w-[fit-content] mx-auto p-4 leading-10">
              <span className="font-bold text-black">ماجدة سمير</span> أم لأربعة
              أطفال معلمة قرءان ومديرة أكاديمية خذ الكتاب بقوة طالبة علم.. أنهيت
              العديد من البرامج العلمية الدينية عن بعد أو حضوريا ومازلت أدرس في
              البعض. أخصائية نفسية. باحثة تربوية ومدرب ومحاضر تربوي. مدرب حياة
              للأم والطفل. استشاري علاقات أسرية. مؤسس مجموعات سند للدعم النفسي
              والاجتماعي. مؤسس نادي (فَتِيّة) أول نادي نسائي حضوري لدعم أمهات
              الرياض. مدرب مهارات ..دربت أطفال ومراهقين خلال ٦دفعات على برنامج
              مهارات الحياة بمستوييه الأول (التعامل مع النفس) والثاني (المهارات
              الاجتماعية).
            </p>
          </div>
          <div dir="rtl">
            <h1 className="blog-title font-bold text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-[var(--main-color)] w-[fit-content]">
              لماذا تختارني
            </h1>
            <ul dir="rtl" className="text-[#9f9f9f] mt-5 mr-5">
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                أخصائي صحة نفسية معتمد من جامعة عين شمس
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                لايف كوتش معتمد من منظمة Neuro-semánticks
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                داعم نفسي معتمد من منظمة الهلال الأحمر المصري
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة على دورة تدريبية في الاضطرابات النفسية جامعة عين شمس
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة على دورة تدريبية في العلاج المعرفي السلوكي جامعة عين شمس
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة على دورة تدريبية في الإرشاد النفسي والأسري{" "}
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                معتمدة من المؤسسة الدولية لجودة واعتماد التدريب بالتعاون مع
                أكاديمية الرواد للتدريب{" "}
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة على دورةmind lines fraiming من منظمة Neuro-semánticks
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة على دورة تدريبية في تصحيح العيوب الصوتية في الأداء اللغوي
                معتمدة من مركز التدريب اللغوي بكلية دار العلوم جامعة القاهرة
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة على إجازة القراءن الكريم براويتي حفص وشعبة عن عاصم
              </li>
              <li className="text-[1.2rem] md:text-[15px] pb-3 list-disc">
                حاصلة إجازة نور البيان لتعليم القراءة بالقرءان
              </li>
            </ul>
          </div>
          <div dir="rtl">
            <h1 className="blog-title font-bold text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-[var(--main-color)] w-[fit-content]">
              تعرف علي قصتي
            </h1>
            <p className=" md:text-[13px] text-[#9f9f9f] my-2 w-[fit-content] mx-auto p-4 leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum
              itaque dignissimos vero perspiciatis, tenetur minus tempora! Ipsa
              est modi dignissimos aspernatur molestiae quis quisquam!
            </p>
          </div>
          <div dir="rtl">
            <h1 className="blog-title font-bold text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-[var(--main-color)] w-[fit-content]">
              شهاداتي :
            </h1>
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
              className="relative shadow-xl h-[500px] rounded-lg md:w-full bg-[#eee]"
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
          </div>
        </div>
      </div>
      <Blogs />
    </div>
  );
}

export default AboutPage;

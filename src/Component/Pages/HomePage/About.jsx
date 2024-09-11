import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./HomePage.css";
import "swiper/css";
import "swiper/css/pagination";

function About() {
  return (
    <section className="relative ">
      <div className="container rounded-lg mx-auto flex flex-wrap justify-between md:flex-col-reverse items-center flex-wrap w-[95%] p-8 md:p-3 bg-[var(--second-color)]">
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

        <div className="w-[50%] md:w-full my-5">
          <h1 className="relative font-bold text-[3rem] text-white text-center">
            ماجدة سمير
          </h1>
          <h3
            dir="rtl"
            className="border-y-2 border-[var(--main-color)] md:text-[13px] text-[#9f9f9f] my-2 w-[fit-content] mx-auto p-4 leading-10"
          >
            أم لأربعة أطفال معلمة قرءان ومديرة أكاديمية خذ الكتاب بقوة طالبة
            علم.. أنهيت العديد من البرامج العلمية الدينية عن بعد أو حضوريا
            ومازلت أدرس في البعض. أخصائية نفسية. باحثة تربوية ومدرب ومحاضر
            تربوي. مدرب حياة للأم والطفل. استشاري علاقات أسرية. مؤسس مجموعات سند
            للدعم النفسي والاجتماعي. مؤسس نادي (فَتِيّة) أول نادي نسائي حضوري
            لدعم أمهات الرياض. مدرب مهارات ..دربت أطفال ومراهقين خلال ٦دفعات على
            برنامج مهارات الحياة بمستوييه الأول (التعامل مع النفس) والثاني
            (المهارات الاجتماعية).
          </h3>

          <div className="text-right">
            <h2 className="py-2 text-[1.5rem] text-white">...الشهادات</h2>
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
        </div>
      </div>
    </section>
  );
}

export default About;

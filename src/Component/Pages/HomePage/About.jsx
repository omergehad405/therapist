import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="relative ">
      <div className="container rounded-lg mx-auto w-[95%] p-8 md:p-3 bg-[#eee]">
        <div dir="rtl" className="flex flex-col justify-center items-center">
          <h1 className="blog-title font-bold text-center text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-[var(--main-color)] mx-auto w-[fit-content]">
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
          <button className="group relative py-3 px-10 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg">
            <Link to="about" className="text-[22px] text-white">
              تعرف علي المزيد
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;

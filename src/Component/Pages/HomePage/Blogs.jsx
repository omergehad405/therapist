import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <section className="relative mt-[15rem]" id="blogs">
      <div>
        <h1 className="relative  text-[3rem] font-bold text-[var(--second-color)] text-center">
          المقالات
        </h1>
        <p className="mb-[6rem] mt-5 text-[2rem] text-[#777] text-center md:text-[1.5rem]">
          كتاباتٌ تمثّلُني، في كل خاطرةٍ منها بِضعٌ من أفكاري
          <br /> اطّلاعُكَ عليها يمنَحُك فكرةً عني، ورؤيةً جديدةً لبعضِ الأشياء.
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-evenly items-center my-10 gap-10">
        <div className="w-[500px] bg-[#eee] h-[550px] md:w-[350px] md:h-[450px] relative ">
          <img
            src="./radio-concept-with-headphones-laptop.jpg"
            alt="audio blogs img"
          />
          <h1 className=" text-center font-bold text-[var(--main-color)] my-10 text-[2rem]">
            مقالات صوتية
          </h1>
          <Link
            to="AudioBlogs"
            className="w-[250px] absolute left-[50%] translate-x-[-50%] py-2 text-white text-center bg-[var(--main-color)]"
          >
            اسمع المقالات
          </Link>
        </div>

        <div className="w-[500px] bg-[#eee] h-[550px] md:w-[350px] md:h-[450px] relative ">
          <img src="./top-view-desk-concept-with-laptop.jpg" alt="blogs img" />
          <h1 className=" text-center font-bold text-[var(--main-color)] my-10 text-[2rem]">
            مقالات مكتوبة
          </h1>
          <Link
            to="WrittenBlogs"
            className="w-[250px] absolute left-[50%] translate-x-[-50%] py-2 text-white text-center bg-[var(--main-color)]"
          >
            اقرأ المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;

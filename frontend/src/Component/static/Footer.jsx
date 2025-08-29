import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Footer() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const response = await axios.get(
          "https://strapi-1-o4c2.onrender.com/api/blogs?populate=*"
        );
        setBlogs(response.data.data);
      } catch (err) {
        setError("Failed to fetch the latest blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchLatestBlogs();
  }, []);
  return (
    <footer className="bg-[var(--second-color)] w-full p-10">
      <div className="flex md:flex-col flex-wrap items-center justify-evenly">
        <div className="flex flex-col items-center gap-5 h-[250px]">
          <h1 className="text-white font-bold text-[1.5rem] text-center">
            تواصل معنا لتجد الدعم الذي تحتاجه.
          </h1>
          <button className="group relative py-3 px-10 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg">
            <a
              href="https://wa.me/00966596116985"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[22px] text-white"
            >
              احجز جلستك الآن
            </a>
          </button>
        </div>

        <div className="flex flex-col items-center gap-5 h-[250px]">
          <h1 className="text-white font-bold text-[1.5rem] text-center">
            آخر المقالات
          </h1>
          <ul className="flex flex-col gap-5 items-center">
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Link to={`/blogs/${blog.documentId}`} className="text-[#ccc]">
                  {blog.blogTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-5 h-[250px]">
          <Link to="/" className="logo font-bold text-[2rem]">
            <img src="./logo.png" alt="logo img" className="w-[150px]" />
          </Link>
          <div>
            <ul className="flex items-center justify-center gap-5">
              <li>
                <a
                  href=""
                  className="text-white text-[2rem] hover:text-[var(--main-color)]"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white text-[2rem] hover:text-[var(--main-color)]"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white text-[2rem] hover:text-[var(--main-color)]"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-white">
        © 2025 All Rights Reserved to
        <a href="" className="text-[var(--main-color)] font-bold ml-2">
          Omar Gehad
        </a>
      </p>
    </footer>
  );
}

export default Footer;

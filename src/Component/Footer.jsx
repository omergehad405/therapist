import React, { useEffect, useState } from "react";
import "./App.css";
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
          `https://strapi-production-df70.up.railway.app/api/blogs?sort=createdAt:desc&pagination[limit]=3&populate=*`
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

  // if (loading) {
  //   return (
  //     <p className="text-center font-bold text-[2rem] my-10">Loading...</p>
  //   );
  // }

  // if (error) {
  //   return <p className="text-center font-bold text-[2rem] my-10">{error}</p>;
  // }
  return (
    <footer className="bg-[var(--second-color)] w-full min-h-[300px] p-10 flex md:flex-col flex-wrap items-center justify-evenly">
      <div className="flex flex-col items-center gap-5 h-[250px]">
        <h1 className="text-white font-bold text-[1.5rem] text-center">
          تواصل معنا لتجد الدعم الذي تحتاجه.
        </h1>
        <button className="group relative py-3 px-3 text-base font-bold nded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg ">
          <Link to="contact" className="text-[22px] text-white">
            احجز جلستك الآن
          </Link>
        </button>
      </div>

      <div className="flex flex-col items-center gap-5 h-[250px]">
        <h1 className="text-white font-bold text-[1.5rem] text-center">
          آخر المقالات
        </h1>
        <ul className="flex flex-col gap-5 items-center">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`} className="text-[#ccc]">
                {blog.attributes.blogTitle}
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
    </footer>
  );
}

export default Footer;

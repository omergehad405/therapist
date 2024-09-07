import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";

function LBlogs() {
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

  if (loading) {
    return (
      <p className="text-center font-bold text-[2rem] my-10">Loading...</p>
    );
  }

  if (error) {
    return <p className="text-center font-bold text-[2rem] my-10">{error}</p>;
  }

  return (
    <div>
      <div>
        <div>
          <section className="my-[10rem]">
            <div className="container mx-auto flex items-center justify-center flex-col gap-10">
              <h1 className="text-center mb-5 font-bold text-[2rem] text-[var(--second-color)]">
                اخر المقالات
              </h1>
              <div className="flex items-center justify-evenly flex-wrap gap-5">
                {blogs.map((blog) => {
                  const blogImgUrl = blog.attributes.blogImg?.data?.attributes
                    ?.url
                    ? `https://strapi-production-df70.up.railway.app${blog.attributes.blogImg.data.attributes.url}`
                    : "placeholder.jpg";

                  return (
                    <div
                      key={blog.id}
                      className="relative flex flex-col w-full max-w-[450px] mb-10 h-auto bg-[#eee] bg-clip-border shadow-md rounded-xl overflow-hidden"
                    >
                      <div className="relative h-[250px] overflow-hidden ">
                        <img
                          src={blogImgUrl}
                          alt={blog.attributes.blogTitle || "blog Cover"}
                          className="w-full h-full object-cover mb-4"
                        />
                      </div>
                      <div dir="rtl" className="p-6">
                        <h5 className="mb-2 text-[2rem] font-semibold text-[var(--second-color)]">
                          {blog.attributes.blogTitle}
                        </h5>
                        <p className="text-[#777] text-[1.1rem]">
                          {blog.attributes.blogDesc}
                        </p>
                      </div>
                      <div className="p-6 pt-0 text-center">
                        <Link
                          to={`/blogs/${blog.id}`}
                          className="inline-block px-6 py-3 text-[1.5rem] text-white bg-[var(--second-color)] rounded-lg shadow-md hover:shadow-lg"
                        >
                          اقرء المزيد
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                className="group relative py-3 px-8 text-[var(--main-color)] text-base font-bold rounded-full overflow-hidden bg-[var(--main-color)] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
        before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[var(--second-color)] transtion-bg duration-500 before:transition-allsecond:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                <Link to="blogs" className="text-[22px] text-white">
                  المزيد من المقالات
                </Link>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LBlogs;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WrittenBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://strapi-production-df70.up.railway.app/api/blogs?populate=*"
        );
        setBlogs(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (err) {
        setError("Error fetching blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <p className="text-center font-bold text-[2rem] my-10">Loading...</p>
    );
  if (error)
    return <p className="text-center font-bold text-[2rem] my-10">{error}</p>;

  return (
    <div>
      <h1 className="relative mt-[5rem] sm:mt-[10rem] text-[3rem] font-bold text-[var(--main-color)] text-center">
        مقالات مكتوبة
      </h1>
      <div className="min-h-[100vh] relative mb-[10rem] sm:mb-[20rem] sm:mt-[7rem]">
        <div
          dir="rtl"
          className="container mx-auto flex flex-wrap items-center justify-center gap-10 my-10 w-full px-4 sm:px-6 lg:px-8"
        >
          {blogs.map((blog) => {
            const blogImgUrl = blog.attributes.blogImg?.data?.attributes?.url
              ? `https://strapi-production-df70.up.railway.app${blog.attributes.blogImg.data.attributes.url}`
              : "placeholder.jpg"; // Fallback image if the URL is missing

            return (
              <div
                key={blog.id}
                className="relative flex flex-col w-full max-w-[450px] h-auto bg-[#eee] bg-clip-border shadow-md rounded-xl overflow-hidden"
              >
                <div className="relative h-[250px] overflow-hidden">
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
      </div>
    </div>
  );
}

export default WrittenBlogs;

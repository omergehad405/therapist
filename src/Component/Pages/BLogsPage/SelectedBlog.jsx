import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogsPage.css";

function SelectedBlog() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
    saveInfo: false,
  });
  const [commentsBox, setCommentsBox] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://strapi-production-df70.up.railway.app/api/blogs/${id}?populate=*`
        );
        const data = await response.json();
        setBlog(data.data.attributes);
        setLoading(false);
      } catch (err) {
        setError("Error fetching blog data");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewComment({
      ...newComment,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentsBox([
      ...commentsBox,
      {
        id: commentsBox.length + 1,
        ...newComment,
      },
    ]);
    setNewComment({
      name: "",
      email: "",
      comment: "",
      saveInfo: false,
    });
  };

  if (loading) return <p className="text-center font-bold text-[2rem] my-10">Loading...</p>;
  if (error) return <p className="text-center font-bold text-[2rem] my-10">{error}</p>;

  // Construct the full image URL
  const blogImgUrl = blog.blogImg?.data?.attributes?.url
    ? `https://strapi-production-df70.up.railway.app${blog.blogImg.data.attributes.url}`
    : "placeholder.jpg"; // Fallback image if the URL is missing

  return (
    <div
      dir="rtl"
      className="container flex md:flex-col md:gap-20 flex-wrap justify-between p-[2rem] my-10 md:my-[10rem] mx-auto w-[90%] min-h-[100vh]"
    >
      <div className="w-[70%] md:w-full">
        <h1 className="font-bold text-[var(--second-color)] mb-3 text-[2.5rem] border-b-2 border-black w-[fit-content]">
          {blog.blogTitle}
        </h1>
        <div className="w-[50%] md:w-full bg-[#eee]">
          {blog.blogImg && blog.blogImg.data && (
            <img
              src={blogImgUrl}
              className="my-[2rem] w-[100%] h-[350px]"
              alt={
                blog.blogImg.data.attributes.alternativeText || "صورة المقالة"
              }
            />
          )}
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-[#777] leading-[3rem]">{blog.blogContent}</p>
        </div>
        <div className="w-[70%] md:w-full mt-20">
          <h1 className="font-bold text-[var(--second-color)] mb-3 text-[2.5rem] border-b-2 border-black w-[fit-content]">
            التعليقات
          </h1>
          <div className="comments-box w-full my-10 p-5 min-h-[250px] flex flex-col gap-10">
            {commentsBox.length > 0 ? (
              commentsBox.map((comment) => (
                <div key={comment.id}>
                  <div className="flex gap-2 items-center pb-2">
                    <h3 className="font-bold">{comment.name} -</h3>
                    <span className="text-[var(--second-color)]">
                      {new Date().toDateString()}
                    </span>
                  </div>
                  <p className="text-[#777] pr-5">{comment.comment}</p>
                </div>
              ))
            ) : (
              <h1 className="font-bold text-[1.5rem] text-center">
                لا توجد تعليقات
              </h1>
            )}
          </div>
          <h1 className="font-bold text-[var(--second-color)] mb-3 text-[2.5rem] border-b-2 border-black w-[fit-content]">
            اضف تعليق جديد
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
            <input
              type="text"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              required
              placeholder="اسمك"
              className="border border-[#ddd] text-[var(--second-color)] rounded-md focus:outline-[#ddd] py-3 px-2"
            />
            <textarea
              required
              value={newComment.comment}
              onChange={handleInputChange}
              name="comment"
              placeholder="التعليق الخاص بك"
              className="border border-[#ddd] text-[var(--second-color)] rounded-md focus:outline-[#ddd] py-3 px-2 min-h-[250px]"
            ></textarea>
            <button className="group relative py-3 px-10 text-base text-[22px] text-white font-bold rounded-full overflow-hidden bg-[var(--main-color)] rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg">
              انشر التعليق
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#eee] w-[350px] h-[100vh] md:w-full"></div>
    </div>
  );
}

export default SelectedBlog;

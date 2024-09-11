import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./BlogsPage.css";

function SelectedBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState({
    name: "",
    comment: "",
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
      } catch (err) {
        setError("Error fetching blog data");
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://strapi-production-df70.up.railway.app/api/comments?filters[blog][id][$eq]=${id}&populate=*`
        );
        const data = await response.json();
        setCommentsBox(data.data);
      } catch (err) {
        setError("Error fetching blog comments");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    fetchComments();

    // Fetch comments every 10 seconds
    const interval = setInterval(fetchComments, 10000);
    return () => clearInterval(interval);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        data: {
          CommenterName: newComment.name,
          commentContent: newComment.comment,
          blog: id,
        },
      };

      await axios.post(
        "https://strapi-production-df70.up.railway.app/api/comments",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Clear the input fields after successful submission
      setNewComment({ name: "", comment: "" });

      // Fetch the comments again to update the comment list
      const response = await axios.get(
        `https://strapi-production-df70.up.railway.app/api/comments?filters[blog][id][$eq]=${id}&populate=*`
      );
      setCommentsBox(response.data.data);

      // Show success toast notification
      toast.success("تم نشر التعليق بنجاح", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err) {
      setError("Failed to post comment");

      // Show error toast notification
      toast.error("Failed to submit the comment!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  if (loading)
    return (
      <p className="text-center font-bold text-[2rem] my-10">Loading...</p>
    );
  if (error)
    return <p className="text-center font-bold text-[2rem] my-10">{error}</p>;
  // Construct the full image URL
  const blogImgUrl = blog?.blogImg?.data?.attributes?.url
    ? `https://strapi-production-df70.up.railway.app${blog.blogImg.data.attributes.url}`
    : "placeholder.jpg";

  return (
    <div
      dir="rtl"
      className="container p-[1rem] my-10 md:my-[10rem] mx-auto min-h-[100vh]"
    >
      <div className=" md:w-full">
        {/* Ensure blog data is available before rendering */}
        {blog ? (
          <>
            <h1 className="blog-title font-bold text-[var(--main-color)] mb-3 text-[2.5rem] border-b-2 border-black w-[fit-content]">
              {blog.blogTitle}
            </h1>

            <div className="blog-img w-[50%] md:w-full bg-[#eee]">
              {blog.blogImg && blog.blogImg.data && (
                <img
                  src={blogImgUrl}
                  className="my-[2rem] w-[100%] h-[350px]"
                  alt={
                    blog.blogImg.data.attributes.alternativeText ||
                    "صورة المقالة"
                  }
                />
              )}
            </div>

            <div className="blog-Content">
              <p className="text-[var(--second-color)] font-bold leading-[3rem]">
                {blog.blogContent}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center font-bold text-[2rem] my-10">
            Loading blog content...
          </p>
        )}

        <div className="w-[70%] md:w-full mt-20">
          <h1 className="font-bold text-[var(--second-color)] mb-3 text-[2.5rem] border-b-2 border-black w-[fit-content]">
            التعليقات
          </h1>
          <div className="comments-box w-full my-10 p-5 min-h-[250px] flex flex-col gap-10">
            {commentsBox && commentsBox.length > 0 ? (
              commentsBox.map((comment) => (
                <div key={comment.id}>
                  <div className="flex gap-2 items-center pb-2">
                    <h3 className="font-bold">
                      {comment.attributes.CommenterName} -
                    </h3>
                    <span className="text-[var(--second-color)]">
                      {new Date().toDateString()}
                    </span>
                  </div>
                  <p className="text-[#777] pr-5">
                    {comment.attributes.commentContent}
                  </p>
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
            <button
              type="submit"
              disabled={!newComment.name || !newComment.comment}
              className={`group relative py-3 px-10 text-base text-[22px] text-white font-bold rounded-full overflow-hidden bg-[var(--main-color)] rounded-md shadow-md hover:shadow-lg ${
                !newComment.name || !newComment.comment
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              انشر التعليق
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default SelectedBlog;

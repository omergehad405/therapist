import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BlogsPage.css";

function SelectedBlog() {
  const { documentId } = useParams(); // Get the documentId from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch blog data by ID
        const blogResponse = await axios.get(
          `https://strapi-cpc0.onrender.com/api/blogs/${documentId}?populate=blogImg`
        );
        setBlog(blogResponse.data.data);
      } catch (err) {
        setError("Error fetching blog or comments data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [documentId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div dir="rtl" className="container my-10 ">
      {blog ? (
        <>
          <h1 className="blog-title capitalize text-[3rem] mx-10">
            {blog.blogTitle}
          </h1>
          {blog.blogImg.url && (
            <img
              src={`https://strapi-cpc0.onrender.com${blog.blogImg.url}`}
              alt="Blog"
              className="blog-image w-[450px] my-10 mx-10"
            />
          )}
          <div className="blog-content mx-10 leading-[3] mb-10 text-[#777]">
            {blog.blogContent}
          </div>
        </>
      ) : (
        <p>Blog not found</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default SelectedBlog;

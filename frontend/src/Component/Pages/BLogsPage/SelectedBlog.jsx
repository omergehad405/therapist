import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BlogsPage.css";

function SelectedBlog() {
  const { id } = useParams(); // Retrieve blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch blog data by ID
        const response = await axios.get(
          `https://strapi-eyem.onrender.com/api/articles/${id}?populate=*`
        );
        setBlog(response.data.data); // Set the blog data
      } catch (err) {
        setError("Error fetching blog data. Please try again.");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div dir="rtl" className="container my-10">
      {blog ? (
        <>
          <h1 className="blog-title">{blog.attributes.blogTitle}</h1>
          {blog.attributes.blogImg?.data?.attributes?.url && (
            <img
              src={blog.attributes.blogImg.data.attributes.url}
              alt="Blog"
              className="blog-image"
            />
          )}
          <div className="blog-content">{blog.attributes.blogContent}</div>
        </>
      ) : (
        <p>Blog not found</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default SelectedBlog;

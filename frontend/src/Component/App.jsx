import React, { useEffect, useState } from "react";
import Header from "./static/Header";
import Footer from "./static/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import WrittenBlogs from "./Pages/BlogsPage/WrittenBlogs";
import AudioBlogs from "./Pages/BlogsPage/AudioBlogs";
import AboutPage from "./Pages/AboutPage/AboutPage";
import { useLocation } from "react-router-dom";
import Loader from "./static/Lodar";
import SelectedBlog from "./Pages/BLogsPage/SelectedBlog";
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      {loading && <Loader />}
      <div className={`${loading ? "hidden" : " "}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="WrittenBlogs" element={<WrittenBlogs />} />
          <Route path="AudioBlogs" element={<AudioBlogs />} />
          <Route path="/blogs/:documentId" element={<SelectedBlog />} />{" "}
          <Route path="services" element={<ServicesPage />} />
          <Route path="About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />
    </>
  );
}

export default App;

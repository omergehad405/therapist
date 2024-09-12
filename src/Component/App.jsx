import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import WrittenBlogs from "./Pages/BlogsPage/WrittenBlogs";
import AudioBlogs from "./Pages/BlogsPage/AudioBlogs";
import AboutPage from "./Pages/AboutPage/AboutPage";
import { useLocation } from "react-router-dom";
import Loader from "./Lodar";
import SelectedBlog from "./Pages/BLogsPage/SelectedBlog";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 5000); // Adjust time based on page load time or API call

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div>
      {loading && <Loader />}
      <div className={`${loading ? "hidden" : " "}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="WrittenBlogs" element={<WrittenBlogs />} />
          <Route path="AudioBlogs" element={<AudioBlogs />} />
          <Route path="/blogs/:id" element={<SelectedBlog />} />{" "}
          <Route path="services" element={<ServicesPage />} />
          <Route path="About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

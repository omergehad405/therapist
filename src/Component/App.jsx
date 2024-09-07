import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import Blogs from "./Pages/BlogsPage/Blogs";
import SelectedBlog from "./Pages/BlogsPage/SelectedBlog";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blogs" element={<BlogsPage />}>
            <Route index element={<Blogs />} />
            <Route path=":id" element={<SelectedBlog />} />
          </Route>
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

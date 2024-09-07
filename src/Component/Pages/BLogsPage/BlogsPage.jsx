import React from "react";
import "./BlogsPage.css";
import { Outlet } from "react-router-dom";

function BlogsPage() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default BlogsPage;

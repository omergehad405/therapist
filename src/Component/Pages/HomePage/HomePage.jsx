import React, { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Blogs from "./Blogs";
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Blogs />
    </div>
  );
}

export default HomePage;

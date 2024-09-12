import React, { useEffect } from "react";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Blogs from "./Blogs";
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Blogs />
    </div>
  );
}

export default HomePage;

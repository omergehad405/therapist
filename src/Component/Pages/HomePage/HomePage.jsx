import React from "react";
import Hero from "./Hero/Hero";
import About from "./AboutUs/About";
import Goals from "./Goals/Goals";
import Blogs from "./Blogs/Blogs";
function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Goals />
      <Blogs />
    </div>
  );
}

export default HomePage;

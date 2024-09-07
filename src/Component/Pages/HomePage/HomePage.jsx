import React from "react";
import Hero from "./Hero";
import About from "./About";
import LBlogs from "./LBlogs";
import Subscription from "./Subscription";
function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <LBlogs />
      <Subscription />
    </div>
  );
}

export default HomePage;

import React from "react";
import "./Hero.css";
import "../../../App.css";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="image">
          <img src="place.png" alt="صورة" />
        </div>
        <div className="info">
          <h1>اسم المكان</h1>
          <h3>عبارة تحفيزية</h3>
          <div className="btns">
            <button>
              <a href="">تواصل معنا</a>
            </button>
            <button>
              <a href="">تواصل معنا</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

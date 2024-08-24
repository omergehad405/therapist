import React from "react";
import "./About.css";
import "../../../App.css";
function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="images">
          <img src="" alt="صور الشهادات" />
        </div>
        <div className="info">
          <h1>من نحن</h1>
          <h3>تفاصيل المكان</h3>

          <div className="person_info">
            <h2>...عن الشخص</h2>
            <ul>
              <li>امتيازات الشخص</li>
              <li>امتيازات الشخص</li>
              <li>امتيازات الشخص</li>
              <li>امتيازات الشخص</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

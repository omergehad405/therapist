import React from "react";
import "./Header.css";
import "../App.css";
function Header() {
  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          logo
        </a>

        <ul>
          <li>
            <a href="">الرئيسة</a>
          </li>
          <li>
            <a href="">المقالات</a>
          </li>
          <li>
            <a href="">خدماتنا</a>
          </li>
          <li>
            <a href="">الكورسات</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

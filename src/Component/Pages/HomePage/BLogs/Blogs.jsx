import React from "react";
import "./Blogs.css";
import "../../../App.css";
function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <h1>اخر المقالات</h1>
        <div className="blogs_container">
          <div className="blog">
            <img src="" alt="صورة المقالة" />
            <h1>عنوان المقالة</h1>
            <button>
              <a href="">فتح المقالة</a>
            </button>
          </div>
          <div className="blog">
            <img src="" alt="صورة المقالة" />
            <h1>عنوان المقالة</h1>
            <button>
              <a href="">فتح المقالة</a>
            </button>
          </div>
          <div className="blog">
            <img src="" alt="صورة المقالة" />
            <h1>عنوان المقالة</h1>
            <button>
              <a href="">فتح المقالة</a>
            </button>
          </div>
        </div>
        <button>
          <a href="">المزيد من المقالات</a>
        </button>
      </div>
    </section>
  );
}

export default Blogs;

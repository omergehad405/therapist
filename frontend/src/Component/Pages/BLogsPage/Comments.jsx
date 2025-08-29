import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Comments() {
  const { documentId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!documentId) return;
    setLoading(true);

    fetch(
      `https://strapi-1-o4c2.onrender.com/api/comments?filters[blog][documentId][$eq]=${documentId}&sort=createdAt:desc`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data?.data || []);
      })
      .catch(() => toast.error("حدث خطأ أثناء تحميل التعليقات"))
      .finally(() => setLoading(false));
  }, [documentId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newComment.name.trim() || !newComment.comment.trim()) {
      toast.warning("الرجاء ملء جميع الحقول");
      return;
    }

    const commentData = {
      data: {
        author: newComment.name.trim(),
        content: newComment.comment.trim(),
        timestamp: new Date().toISOString(),
        blog: documentId,
      },
    };

    fetch("https://strapi-1-o4c2.onrender.com/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setComments([data.data, ...comments]);
          setNewComment({ name: "", comment: "" });
          toast.success("تم إضافة التعليق بنجاح 🎉");
        } else {
          toast.error("خطأ في إضافة التعليق");
        }
      })
      .catch(() => toast.error("حدث خطأ أثناء إضافة التعليق"));
  };

  return (
    <div>
      <h1 className="capitalize text-[3rem] mx-10">التعليقات</h1>

      <div className="mx-10 my-5">
        {loading ? (
          <p>جاري التحميل...</p>
        ) : comments.length === 0 ? (
          <p>لا يوجد تعليقات بعد، كن أول من يعلق 🎉</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="my-5 border-b pb-2">
              <h3 className="capitalize text-[1.5rem] flex items-center gap-3">
                {comment.author || "مجهول"}
                <span className="text-[1rem] text-[#777]">
                  {comment.timestamp
                    ? new Date(comment.timestamp).toLocaleDateString()
                    : "غير متوفر"}
                </span>
              </h3>
              <p className="text-[#777]">{comment.content}</p>
            </div>
          ))
        )}
      </div>

      <div className="mx-10">
        <form className="flex flex-col w-[50%]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="الاسم"
            value={newComment.name}
            className="border-2 p-2 my-2 rounded"
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
          />
          <textarea
            placeholder="اكتب تعليقك هنا"
            value={newComment.comment}
            className="border-2 p-2 my-2 rounded"
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
          <button
            type="submit"
            className="group relative py-3 px-3 text-white font-bold rounded-md overflow-hidden bg-[var(--main-color)] transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[var(--second-color)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
          >
            اضافة تعليق
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;

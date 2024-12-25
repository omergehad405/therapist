import React from "react";
import "./App.css";
function Lodar() {
  return (
    <div className="relative flex items-center justify-center h-[100vh]">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[var(--main-color)] animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-[var(--main-color)] animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-[var(--main-color)] animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}

export default Lodar;

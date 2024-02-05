import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="w-52 h-16 mt-2 mb-3 rounded-xl text-2xl bg-[#FF9D2B] tracking-widest">
      {label}
    </button>
  );
};

export default Button;

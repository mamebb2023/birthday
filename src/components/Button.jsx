import React from "react";

const Button = ({ children, className, href = "#", white = false, type }) => {
  let button;

  if (type) {
    button = (
      <button
        className={`${className} ${
          white
            ? "text-n-8 bg-n-1 border-n-1 hover:text-n-1 hover:bg-n-8"
            : "text-n-1 bg-n-8"
        } mt-10 w-[100px] h-10 rounded-md border transition flex justify-center items-center fade-in`}
        type={type}
      >
        {children}
        <span class="material-symbols-outlined ml-2">arrow_forward</span>
      </button>
    );
  } else {
    button = (
      <a
        href={href}
        className={`${className} ${
          white
            ? "text-n-8 bg-n-1 border-n-1 hover:text-n-1 hover:bg-n-8"
            : "text-n-1 bg-n-8"
        } mt-10 w-[100px] h-10 rounded-md border transition flex justify-center items-center fade-in`}
      >
        {children}
        <span class="material-symbols-outlined ml-2">arrow_forward</span>
      </a>
    );
  }
  return button;
};

export default Button;

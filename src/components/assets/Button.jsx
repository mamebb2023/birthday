import React from "react";

const Button = ({ children, className, href = "#", bg = "1", text = "8" }) => {
  return (
    <a
      href={href}
      className={`${className} bg-n-${bg} text-n-${text} mt-10 w-[100px] h-10 rounded-md flex justify-center items-center`}
    >
      {children}
      <box-icon name="right-arrow-alt"></box-icon>
    </a>
  );
};

export default Button;

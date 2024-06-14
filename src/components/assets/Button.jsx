import React from "react";

const Button = ({ children, className, href = "" }) => {
  return <div className={`${className} `}>{children}</div>;
};

export default Button;

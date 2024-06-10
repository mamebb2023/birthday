import React from "react";

const Section = ({ children, className }) => {
  return <div className={`w-[100vw] h-[100vh] ${className}`}>{children}</div>;
};

export default Section;

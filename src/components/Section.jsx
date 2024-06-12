import React from "react";

const Section = ({ className, children }) => {
  return <div className={`${className} h-[100vh] w-[100vw]`}>{children}</div>;
};

export default Section;

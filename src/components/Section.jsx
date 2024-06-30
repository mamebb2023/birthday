import React from "react";

const Section = ({
  className,
  children,
  theme1 = false,
  themeBlack = false,
  themeNone = false,
}) => {
  if (theme1) {
    return (
      <div className={`section relative h-[100vh] w-[100vw] ${className}`}>
        {children}
        <div className="circle circle1 bg-[#00fff2]"></div>
        <div className="circle circle2 bg-[#00ff1e]"></div>
        <div className="circle circle3 bg-[#bababa]"></div>
      </div>
    );
  } else if (themeNone) {
    return (
      <div className={`section relative h-[100vh] w-[100vw] ${className}`}>
        {children}
      </div>
    );
  } else if (themeBlack) {
    return (
      <div
        className={`section relative h-[100vh] w-[100vw] bg-[black] text-n-1 ${className}`}
      >
        {children}
        <div className="circle circle1 bg-[#500050]"></div>
        <div className="circle circle2 bg-[#c85757]"></div>
        <div className="circle circle3 bg-[#bababa]"></div>
      </div>
    );
  } else {
    return (
      <div className={`section relative h-[100vh] w-[100vw] ${className}`}>
        {children}
        <div className="circle circle1 bg-[#800080]"></div>
        <div className="circle circle2 bg-[#f08080]"></div>
        <div className="circle circle3 bg-[#bababa]"></div>
      </div>
    );
  }
};

export default Section;

import React from "react";

const CurvedSentence = ({ text, radiusX, radiusY, dx, dy }) => {
  const path = `M ${dx},${dy} C ${radiusX},${dy} ${radiusX},${radiusY} ${dx},${radiusY}`;
  return (
    <svg width="200" height="100">
      <path d={path} fill="transparent" />
      <text textAnchor="middle" dominantBaseline="middle">
        <textPath href="#textPath">{text}</textPath>
      </text>
      <defs>
        <path id="textPath" d={path} />
      </defs>
    </svg>
  );
};

export default CurvedSentence;

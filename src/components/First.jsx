import React from "react";
import Section from "./Section";
import "./First.css";

const First = () => {
  return (
    <Section className="flex justify-center items-center bg-n-8 text-n-1">
      <div clasn>
        <img src="/iphone.png" className="iphone" alt="iphone" />
        <p className="body-2">For better expirence, Flip the laptop</p>
      </div>
    </Section>
  );
};

export default First;

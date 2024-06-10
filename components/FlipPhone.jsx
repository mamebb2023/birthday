import React from "react";
import Section from "./Section";
import "./FlipPhone.css";

// https://codepen.io/towc/pen/LGMGQG
// https://codepen.io/emoreno911/pen/veBjbw
// https://codepen.io/miocene/pen/aPwrpw
// https://codepen.io/fixcl/pen/AaBNZB
// https://codepen.io/fixcl/pen/bGeWvY
// https://codepen.io/arcs/pen/XKKYZW

const FlipPhone = () => {
  return (
    <Section className="flex justify-center items-center">
      <div className="bg-[red] w-[500px] h-[500px]">
        <img src="/iphone.png" className="iphone" />
        <p>for better experience flip the laptop</p>
      </div>
    </Section>
  );
};

export default FlipPhone;

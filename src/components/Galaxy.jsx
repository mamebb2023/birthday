import React from "react";

import Section from "./Section";
import "../assets/Galaxy.css";

const Galaxy = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="galaxy">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </Section>
  );
};

export default Galaxy;

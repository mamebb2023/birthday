import React, { useEffect, useState } from "react";
import Section from "./Section";
import Bake from "../assets/Bake";
import { icons } from "../constants";
import Galaxy from "./Galaxy";

const Cake = () => {
  const [display, setDisplay] = useState(false);
  const [opacity, setOpacity] = useState(100);
  const [showWind, setShowWind] = useState(false);
  const [showText, setShowText] = useState(false);
  const [horror, setHorror] = useState(false);

  setTimeout(() => {
    setDisplay(true);
    setTimeout(() => {});
  }, 10000);

  const blowCandle = () => {
    setShowWind(true);
    setTimeout(() => {
      setShowWind(false); // Hide wind after 500 milliseconds
    }, 500);
    setOpacity(opacity - 10);
    if (opacity === 10) {
      setHorror(true);
    }
  };

  return (
    <Section className="cake relative">
      {horror && (
        <div className="absolute top-0 left-0 z-5 bg-redhorror">Horror</div>
      )}
      <div className="absolute top-0 left-0">
        <Galaxy />
      </div>
      {display && (
        <button className="blower fade-in" onClick={blowCandle}></button>
      )}
      {showWind && <i className="wind"></i>}
      {display && (
        <p className="blow-text fade-in absolute top-[100px] left-[350px] text-n-1 font-['Playwrite NL']">
          blow the candle...
        </p>
      )}
      <div className="relative w-full h-full">
        <div className="absolute -top-[200px] left-[170px] w-[300px]">
          <Bake />
        </div>
        <div className="absolute top-[150px] right-[120px] -rotate-12">
          <h2 className="h2 h-auto">
            <span className="happybirthday">Happy Birthday To You</span>
          </h2>
          <h1 className="h1 text-[10em] mt-[150px] ml-[100px]">
            <span className="name">Name</span>
          </h1>
        </div>
        {icons.map((icon) => (
          <i
            key={icon.id}
            className={`absolute w-[100px] h-[100px] ${icon.position}`}
          >
            <lord-icon
              src={`https://cdn.lordicon.com/${icon.icon}.json`}
              trigger={icon.trigger || "hover"}
              state={icon.state}
              delay="1000"
              style={{ width: "inherit", height: "inherit" }}
            ></lord-icon>
          </i>
        ))}
      </div>
    </Section>
  );
};

export default Cake;

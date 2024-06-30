import React, { useState } from "react";
import Section from "./Section";
import Bake from "./Bake";
import Galaxy from "./Galaxy";
import Horror from "./Horror";

const Cake = () => {
  const [showButton, setShowButton] = useState(false);
  const [showHorror, setShowHorror] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showWind, setShowWind] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [opacity, setOpacity] = useState(100);

  setTimeout(() => {
    setShowButton(true);
    setTimeout(() => {
      setShowText(true);
    }, 2000);
  }, 10000);

  const blowCandle = () => {
    setOpacity(opacity - 10);
    setShowWind(true);
    setTimeout(() => {
      setShowWind(false); // Hide wind after 500 milliseconds
    }, 500);

    if (opacity < 10) {
      setShowHorror(true);
      setTimeout(() => {
        setShowHorror(false);
        setShowButton(false);
        setShowText(false);
        setTimeout(() => {
          setShowNextButton(true);
        }, 3000);
      }, 4000);
    }
  };

  return (
    <Section
      className="fade-in bg-gradient-to-r from-purple-500 to-yellow-500 flex justify-center items-center"
      themeNone
    >
      <div className="z-3">
        <div className="absolute -top-[200px] left-[450px]">
          <Bake />
        </div>
        {showButton &&  && (
          <button className={`blower fade-in`} onClick={blowCandle}></button>
        )}
        {showWind && <i className="wind"></i>}

        {showText && (
          <p className="blow-text fade-in transition-all absolute top-[100px] left-[600px] text-n-1 font-code">
            <span className="material-symbols-outlined fade-in -scale-x-100 -rotate-90 mr-3">
              switch_access_shortcut
            </span>
            {opacity >= 50
              ? "make a wish and blow the candle..."
              : "you are getting close"}
          </p>
        )}
      </div>
      {showHorror && (
        <div className="z-5 horror w-[100vw] h-[100vh] bg-black">
          <Horror />
        </div>
      )}

      <div className="absolute top-0 left-0">
        <Galaxy />
      </div>
    </Section>
  );
};

export default Cake;

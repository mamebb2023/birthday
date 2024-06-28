import { useState, useEffect } from "react";
import BirthdayFireworks from "./Fireworks";
import Button from "./Button";

const Birthday = () => {
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 2000);
      return () => clearTimeout(textTimer);
    }, 7000);
    return () => clearTimeout(buttonTimer);
  }, []);

  return (
    <div className="relative w-[100vw] h-[100vh] text-n-1 bg-[#000]">
      <BirthdayFireworks />
      <div className="absolute w-[800px] h-[600px] rounded-lg backdrop-blur-md bg-n-1/10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center">
        <h2 className="h2 font-code fade-in">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 fade-in">
            Happy 21st Birthday
          </span>
        </h2>
        <h1 className="h1 text-[10em] mt-[100px] font-grotesk">Name</h1>
        <div className="absolute bottom-10 left-[40%] flex flex-col justify-center items-center">
          {showButton && (
            <>
              <Button className="fade-in" href="/cake">
                Have a cake{" "}
                <span className="material-symbols-outlined ml-3">
                  arrow_forward
                </span>
              </Button>
              {showText && (
                <p className="text-[.8em] fade-in">
                  {"("}of course sugar free{")"}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Birthday;

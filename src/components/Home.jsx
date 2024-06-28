import { useState } from "react";
import Section from "./Section";
import Button from "./Button";

const Home = () => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  setTimeout(() => {
    setShowText(true);
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, 5000);

  return (
    <Section className="flex justify-center items-center" themeBlack>
      {showText && (
        <p className="absolute top-[50%] left-[100px] rotate-90 fade-in">
          just kidding, you did not just flip your laptop, did you?
        </p>
      )}

      <div className="flex flex-col justify-center items-center">
        <img src="/laptop.png" className="iphone" />
        <p>For a better experience, rotate the whole device.</p>
        {showButton && (
          <Button
            href="/birthday"
            className="absolute top-[40%] right-[300px] z-3 fade-in"
          >
            <span className=" material-symbols-outlined transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600">
              arrow_forward
            </span>
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Home;

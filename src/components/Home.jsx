import React, { useState } from "react";
import Section from "./assets/Section";
import "./Home.css";
import Button from "./assets/Button";

const Home = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);

  setTimeout(() => {
    setDisplay1(true);
    setTimeout(() => {
      setDisplay2(true);
    }, 2000);
  }, 6000);

  return (
    <Section className="relative bg-n-8 text-n-1 flex justify-center items-center">
      {display1 && (
        <p className="absolute top-[50%] left-[100px] rotate-90 fade-in">
          just kidding, you did not just flip your laptop, did you?
        </p>
      )}

      <div className="flex flex-col justify-center items-center">
        <img src="/iphone.png" className="iphone" />
        <p>For a better experience, rotate the whole device.</p>
        {display2 && (
          <Button href="/birthday" white>
            Next
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Home;

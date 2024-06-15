import React from "react";
import Section from "./assets/Section";
import "./Home.css";
import Button from "./assets/Button";

const Home = () => {
  return (
    <Section className="bg-n-8 text-n-1 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/iphone.png" className="iphone" />
        <p>For a better experience, rotate the whole device.</p>
        <Button href="/birthday">Next</Button>
      </div>
    </Section>
  );
};

export default Home;

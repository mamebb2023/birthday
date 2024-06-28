import React from "react";
import Section from "./Section";
import Bake from "./Bake";
import Galaxy from "./Galaxy";

const Cake = () => {
  return (
    <Section className="bg-gradient-to-r from-purple-500 to-yellow-600">
      <div className="z-3 absolute -top-[200px] left-[470px] w-[300px]  ">
        <Bake />
      </div>
      <div className="z-2 absolute top-0 left-0">
        <Galaxy />
      </div>
    </Section>
  );
};

export default Cake;

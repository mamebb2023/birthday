import React from "react";
import Section from "./Section";
import Bake from "./assets/Bake";
// import cake from "./assets/cake.svg";

const Cake = () => {
  return (
    <Section className="bg-[#ffda9a] flex justify-center items-center flex-col">
      <div className="">
        <div className="cake">
          <Bake />
        </div>
        hello
      </div>
    </Section>
  );
};

export default Cake;

import React from "react";
import Section from "./Section";
import Bake from "./assets/Bake";
import { icons } from "./assets";
// import cake from "./assets/cake.svg";

const Cake = () => {
  return (
    <Section className="bg-[#b39aff]">
      <div className="relative">
        <div className="absolute -top-[200px] left-[170px] w-[300px]">
          <Bake />
        </div>
        <div className="absolute top-[150px] right-[120px] -rotate-12">
          <h2
            className="happybirthday h2"
            style={{ fontFamily: "Playwrite NL" }}
          >
            Happy Birthday To You
          </h2>
          <h1
            className="h1 text-[10em] mt-[150px] ml-[100px]"
            style={{ fontFamily: "Great Vibes" }}
          >
            Name
          </h1>
        </div>
        {icons.map((icon) => (
          <lord-icon
            src={`https://cdn.lordicon.com/${icon.icon}.json`}
            trigger={icon.trigger || "loop"}
            state={icon.state}
            delay="1000"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        ))}
      </div>
    </Section>
  );
};

export default Cake;

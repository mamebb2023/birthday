import React, { useContext, useState } from "react";

import Section from "./Section";
import { PageContext } from "../App";
import "./First.css";

const First = () => {
  const { handlePageChange } = useContext(PageContext);
  const [display, setDisplay] = useState(false);
  const [showButton, setShowButton] = useState(false);

  setTimeout(() => {
    setDisplay(true);
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, 6000);
  return (
    <Section className="fade-in relative flex justify-center items-center bg-n-8 text-n-1">
      <div className="">
        {display && (
          <p className="absolute top-[50%] left-[100px] rotate-90 fade-in">
            just kidding, you did not actually flip the laptop, did you?
          </p>
        )}
        <img src="/iphone.png" className="iphone" alt="iphone" />
        <p className="body-2 pb-10">
          For better expirence, rotate the whole device
        </p>
        {showButton && (
          <button
            onClink={() => handlePageChange("happybirthday")}
            className="text-center block"
          >
            <a className="bg-[white] text-[1.1em] text-n-8 text-center font-bold fade-in rounded-md border border-[transparent] transition cursor-pointer hover:bg-n-8 hover:text-n-1 hover:border-n-1 flex flex-row justify-between items-center px-4 py-2">
              <p>Next</p>
              <span class="ml-2 material-symbols-outlined">arrow_forward</span>
            </a>
          </button>
        )}
      </div>
    </Section>
  );
};

export default First;

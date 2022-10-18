import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Founder E'Girls Right Foundation",
          "Harvard Kennedy School Alumna",
          "Executive Director NEXIM Bank",
          "Philanthropist",
          "Patriot and Egalitarian"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default TypeWriter;

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
          "Inspiring leader",
          "Social Justice advocate",
          "An effective negotiator",
          "Excellent public speaker",
          "Philanthropist",
          "Innovative problem solver",
          "Patriot and Egalitarian",
          "A great listener, astute strategist",
          "A champion for social change."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default TypeWriter;

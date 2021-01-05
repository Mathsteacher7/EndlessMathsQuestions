import React, { useState } from "react";
import Mathjax from "react-mathjax2";
import Equations from "./Equations";
// import numberRegex from "../../../utils/constants";

const Quadratic = () => {
  const equations = [
    {
      question: "\\text{find }x\\text{:}",
    },
    {
      question: "x^2+4x+4=0",
      answers: ["2"],
    },
    {
      question: "x^2-5x+6=0",
      answers: ["3", "2"],
    },
    {
      question: "x^2+5x-6=0",
      answers: ["-6", "1"],
    },
  ];

  const numberRegex = /^-?[1-9]\d{0,1000}(\.\d*)?$/;

  return (
    <section>
      <Mathjax.Context input="tex">
        <div>
          {equations.map((equation) => {
            const [answer, setAnswer] = useState("");
            const onChange = (e) => {
              if (numberRegex.test(e.target.value)) {
                setAnswer(e.target.value);
              }
            };
            return (
              <div style={{ padding: "20px" }} key={equation.question}>
                <span style={{ display: "inline-block", width: "250px" }}>
                  <Mathjax.Node inline>{equation.question}</Mathjax.Node>
                </span>
                &nbsp;
                {equation.answers && (
                  <input
                    value={answer}
                    onChange={onChange}
                    style={{ width: "50px" }}
                  ></input>
                )}
              </div>
            );
          })}
        </div>
      </Mathjax.Context>
    </section>
  );
};

export default Quadratic;

import React from "react";
import Mathjax from "react-mathjax2";

const Equations = () => {
  //   const equations = ["", "x+4=2", "3x=9", "2x-5=x+4"];

  const equations = [
    {
      question: "\\text{find }x\\text{:}",
    },
    {
      question: "x+4=2",
      answer: "2",
    },
    {
      question: "3x=9",
      answer: "3",
    },
    {
      question: "2x-5=x+4",
      answer: "9",
    },
  ];

  return (
    <section>
      <Mathjax.Context input="tex">
        <div>
          {equations.map((equation) => {
            return (
              <div style={{padding: "20px"}}>
                  <span style={{ display: "inline-block", width: '250px' }}>

                <Mathjax.Node inline >{equation.question}</Mathjax.Node>
                  </span>
                &nbsp;
                {equation.answer && <input style={{ width: "50px" }}></input>}
              </div>
            );
          })}
        </div>
      </Mathjax.Context>
    </section>
  );
};

export default Equations;

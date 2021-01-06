import React, { useState } from "react";
import RoundingExercises from "./rounding/RoundingExercises";

// let exercises = RoundingExercises();

const RoundingToSF = () => {
  const [exercises, setExercises] = useState(RoundingExercises());
  const getMoreExercises = () => {
    setExercises(RoundingExercises());
  };
  return (
    <>
      {exercises.map((exercise) => {
        console.log("exercise", exercise);
        return (
          <section className="section" key={exercise}>
            <div className="container roundingToSF">
              <div className="oneLine">
                <div className="exercise">
                  <div className="theExercise">{exercise}</div>
                  <div>=</div>
                  <div>
                    <input className="input" type="answer" name="answer1" />
                  </div>
                </div>
                <div className="rightOrWrong"></div>
              </div>
            </div>
          </section>
        );
      })}
      <button className="button">Check Answers</button>
      <button className="button" onClick={getMoreExercises}>
        I want more exercises!
      </button>
    </>
  );
};

export default RoundingToSF;

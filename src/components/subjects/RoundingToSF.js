import React from "react";
import RoundingExercises from "./rounding/RoundingExercises";

let exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
  exercise10;
// const exercises = [
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
//   exercise7,
//   exercise8,
//   exercise9,
//   exercise10,
// ];

// function getExerciseEasy() {
//   const exercise = (Math.random() * 10).toFixed(2);
//   return +exercise;
// }
// function getExerciseMeduim() {
//   const exercise = (Math.random() * 100).toFixed(2);
//   return +exercise;
// }
// function populateExercises() {
//   for (let i = 0; i < 10; i += 3) {
//     exercises[i] = getExerciseEasy(i);
//     exercises[i + 1] = getExerciseMeduim(i + 1);
//   }
// }
// populateExercises();

const exercises = RoundingExercises();

const RoundingToSF = () => {
  return (
    <>
      {exercises.map((exercise) => {
        return (
          <section className="section" key={exercise}>
            <div className="container roundingToSF">
              <div className="oneLine">
                <div className="exercise">
                  <div className="theExercise">{exercise}</div>
                  <div>=</div>
                  <div>
                    <input
                      className="input"
                      type="answer"
                      name="answer1"
                      // onChange={this.handleChange1}
                      // value={this.state.ans1}
                    />
                  </div>
                </div>
                <div className="rightOrWrong"></div>
              </div>
            </div>
          </section>
        );
      })}
      <button className="button" /*onClick={this.handleSubmit}*/>
        Check Answers
      </button>
      <button className="button" /*onClick={this.handleReset}*/>
        I want more exercises!
      </button>
    </>
  );
};

export default RoundingToSF;

import React from "react";

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
const exercises = [
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
  exercise10,
];

function getExerciseEasy() {
  const exercise = (Math.random() * 10).toFixed(2);
  return +exercise;
}
function getExerciseMeduim() {
  const exercise = (Math.random() * 100).toFixed(2);
  return +exercise;
}
function populateExercises() {
  for (let i = 0; i < 10; i += 2) {
    exercises[i] = getExerciseEasy(i);
    exercises[i + 1] = getExerciseMeduim(i + 1);
  }
}
populateExercises();

const RoundingExercises = () => {
  return exercises;
};

export default RoundingExercises;

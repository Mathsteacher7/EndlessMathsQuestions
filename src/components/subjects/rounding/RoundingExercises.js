let exercises = [];

function getExerciseEasy() {
  const exercise = (Math.random() * 10).toFixed(2);
  return exercise;
}
function getExerciseMeduim() {
  const exercise = (Math.random() * 100).toFixed(2);
  return exercise;
}
function populateExercises() {
  exercises = [];
  for (let i = 0; i < 10; i++) {
    exercises.push(getExerciseEasy());
  }
}

const RoundingExercises = () => {
  populateExercises();
  return exercises;
};

export default RoundingExercises;

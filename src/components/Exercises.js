import React from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  console.log(exercises);
  return (
    <div id="exercises" className="m-1 p-1">
      <div className="stack">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;

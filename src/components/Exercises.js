import React from "react";
import { useEffect, useState } from "react";
import { options, fetchData } from "../utils/FetchData";
const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises);
  return (
    <div id="exercises" className="m-1 p-1">
      <div>show results</div>
      <div className="stack">
        {exercises.map((exercise, index) => {
          <p key={index}> {exercise.bodyPart}</p>;
        })}
      </div>
    </div>
  );
};
export default Exercises;

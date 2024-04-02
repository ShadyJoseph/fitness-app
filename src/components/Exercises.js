import React, { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import { fetchData,exerciseOptions } from "../utils/FetchData";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
   const fetchExData=async()=>{
    let exercisesData=[];
    if (bodyPart=='all'){
      exercisesData= await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
    }else{
      exercisesData= await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      );
    }
    setExercises(exercisesData);
   }
   fetchExData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="m-1 p-1">
      {exercises && exercises.length > 0 ? (
        <div className="stack">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      ) : (
        <p>No exercises found for the selected body part.</p>
      )}
    </div>
  );
};

export default Exercises;

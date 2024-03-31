import React from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${ExerciseCard.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    </Link>
  );
};

export default ExerciseCard;

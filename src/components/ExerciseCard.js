import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    borderTop:"4px solid blue",
    flexBasis: "calc(50% - 20px)",
    marginBottom: "20px",
    boxSizing: "border-box",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    ":hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
  };

  const imageStyle = {
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    objectFit: "cover",
  };

  const buttonStyle = {
    margin: "5px",
  };

  return (
    <>
    <div style={cardContainerStyle}>
     
      <Link
        className="exercise-card"
        to={`/exercise/${exercise.id}`}
        style={cardStyle}
      >
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={imageStyle}
        />
        <div className="card-body">
          <h3 className="text-capitalize">{exercise.name}</h3>
          <button className="btn btn-primary" style={buttonStyle}>
            {exercise.bodyPart}
          </button>
          <button className="btn btn-secondary" style={buttonStyle}>
            {exercise.target}
          </button>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ExerciseCard;

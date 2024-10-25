import React from "react";
import Icon from "../assets/assets/icons/gym.png";

const Bodyparts = ({ item, setBodyPart, bodyPart,setSearch}) => {
  const handleClick = () => {
  setBodyPart(item); 
  setSearch(item); 
  window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <div className="text-center bodypart-container ">
      <p className="mb-2 text-primary text-capitalize fs-5">{item}</p>
      <button
        className="btn mt-2 bodypart-button"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "10px",
          border: "none",
          borderTop: item === bodyPart ? "4px solid blue" : "none",
        }}
        onClick={handleClick}
      >
        <img
          src={Icon}
          alt="Gym Icon"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </div>
  );
};

export default Bodyparts;

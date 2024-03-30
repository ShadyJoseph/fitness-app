// Bodyparts.js
import React from 'react';
import Icon from '../assets/assets/icons/gym.png';
import './style.css';

const Bodyparts = ({ item, setBodyPart, bodyPart }) => {
  const handleClick = () => {
    setBodyPart(item);
  };

  return (
    <div className="text-center bodypart-container">
      <p className="mb-2">{item}</p>
      <button
        className="btn mt-2 bodypart-button"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '10px',
          boxShadow: item === bodyPart ? ' 5px 5px 17px 0px rgba(36,149,255,0.27)': 'none',
        }}
        onClick={handleClick}
      >
        <img src={Icon} alt="Gym Icon" style={{ width: "50px", height: "50px" }} />
      </button>
    </div>
  );
};

export default Bodyparts;

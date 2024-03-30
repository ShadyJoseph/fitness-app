// Bodyparts.js
import React from 'react';
import Icon from '../assets/assets/icons/gym.png';

const Bodyparts = ({ item, setBodyPart, bodyPart }) => {
  const handleClick = () => {
    setBodyPart(item);
  };

  return (
    <div className="text-center">
      <p className="mb-2">{item.name}</p>
      <button
        className="btn btn-outline-primary mt-2"
        style={{
          width: '150px',
          height: '150px',
          gap:'45px',
          cursor:'pointer',
          borderRadius: '10px',
          boxShadow: item === bodyPart ? '0px 0px 10px #0d6efd' : 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={handleClick}
      >
        <img src={Icon} alt="Gym Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </button>
    </div>
  );
};

export default Bodyparts;

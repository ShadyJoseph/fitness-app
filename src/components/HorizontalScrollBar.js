// HorizontalScrollBar.js
import React, { useState } from 'react';
import Bodyparts from './Bodyparts';
import './style.css';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickPrev = () => {
    const newIndex = Math.max(0, startIndex - 3);
    setStartIndex(newIndex);
  };

  const handleClickNext = () => {
    const newIndex = Math.min(data.length - 3, startIndex + 3);
    setStartIndex(newIndex);
  };

  return (
    <div className="container mt-5 scrollbar-container">
      <div className="d-flex flex-nowrap justify-content-between align-items-center" style={{ overflowX: 'hidden' }}>
        {data.slice(startIndex, startIndex + 3).map((item, index) => (
          <div key={item.id || index} className="mr-3">
            <Bodyparts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleClickPrev} disabled={startIndex === 0}>
        Previous
      </button>
      <button className="btn btn-primary mt-3 ms-2" onClick={handleClickNext} disabled={startIndex >= data.length - 3}>
        Next
      </button>
    </div>
  );
};

export default HorizontalScrollBar;

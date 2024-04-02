import React, { useState } from "react";
import Bodyparts from "./Bodyparts";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart,setSearch,handleSearchButtonClick }) => {
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
    <div className="container-fluid mt-5 scrollbar-container">
      <div
        className="d-flex flex-nowrap justify-content-between align-items-center overflow-hidden"
        style={{ overflowX: "auto" }}
      >
        {data.slice(startIndex, startIndex + 3).map((item, index) => (
          <div key={item.id || index} className="mr-3 flex-grow-0">
            <Bodyparts
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              setSearch={setSearch}
            />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={handleClickPrev}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleClickNext}
          disabled={startIndex >= data.length - 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;

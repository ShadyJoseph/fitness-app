import React, { useState } from "react";
import { fetchData } from "../utils/FetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercise, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData();
        const searchedExercises = exercisesData.filter((exercise) => 
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
        );
        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    }
  };

  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              style={{ boxShadow: "none" }}
              type="text"
              className="form-control"
              placeholder="Search Exercise"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <div className="input-group-append">
              <button
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;

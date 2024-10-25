import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyParts(["all", ...bodyPartsData]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBodyParts();
  }, []);

  const handleSearchButtonClick = async () => {
    try {
      setLoading(true);
      let exercisesData = [];

      if (search.trim() === '') {

        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
          exerciseOptions
        );
      }

      setLoading(false);
      setExercises(exercisesData);
    } catch (error) {
      setError(error);
      setLoading(false);
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
                onClick={handleSearchButtonClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <p><Loader/></p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <HorizontalScrollBar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            setSearch={setSearch}
          />
        </div>
      )}
    </div>
  );
};

export default SearchExercises;

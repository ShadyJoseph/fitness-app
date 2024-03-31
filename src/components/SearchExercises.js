import React, { useEffect, useState } from 'react';
import { options, fetchData } from '../utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState(['all']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);

    /*  const searchedExercises = exercisesData.filter(
        (item) => 
        (item.name.toLowerCase().includes(search) ||
        item.target.toLowerCase().includes(search) ||
        item.equipment.toLowerCase().includes(search) ||
        item.bodyPart.toLowerCase().includes(search)) &&
        (bodyPart === 'all' || item.bodyPart.toLowerCase() === bodyPart)
    );*/
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(exercisesData);
    }
  };

  
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              style={{ boxShadow: 'none' }}
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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      )}
    </div>
  );
};

export default SearchExercises;

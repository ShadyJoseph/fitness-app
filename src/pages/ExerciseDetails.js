import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../utils/FetchData";
import Details from "../components/Details";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExData = async () => {
      try {
        const exDbUrl = 'https://exercisedb.p.rapidapi.com';
        const exerciseDetailData = await fetchData(`${exDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      }
    };
    fetchExData();
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-md-8">
          <Details exerciseDetail={exerciseDetail} />
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;

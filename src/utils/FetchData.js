import axios from 'axios';
export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': '65f91b3752msh477959c95cf4969p1003a0jsn873870c7ac9f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
import axios from 'axios';
export const options = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': '65f91b3752msh477959c95cf4969p1003a0jsn873870c7ac9f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url,options) => {
  try {
    const response = await axios.get(url,options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

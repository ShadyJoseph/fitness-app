export const exerciseOptions = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Host': process.env.REACT_APP_EX_RAPID_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_EX_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

// file src/api.js
import dotenv from 'dotenv';
dotenv.config();

const apiUrl = process.env.VITE_REACT_APP_API_URL;

export const fetchData = async () => {
  const response = await fetch(`${apiUrl}/endpoint`);
  const data = await response.json();
  return data;
};

import axios from "axios";

const API_URL = "http://localhost:5000"; // Adjust as needed

// Fetch all webtoons
export const getWebtoons = async () => {
  const response = await axios.get(`${API_URL}/webtoons`);
  return response.data;
};

// Add a new webtoon
export const addWebtoon = async (webtoonData, token) => {
  const response = await axios.post(`${API_URL}/webtoons`, webtoonData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// User registration
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

// User login
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

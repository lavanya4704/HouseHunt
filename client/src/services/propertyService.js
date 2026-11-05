import axios from "axios";

const API_URL = "https://house-hunt-qif4.vercel.app/api/properties";

export const getProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

import axios from "axios";

export const getProducts = async (count) => {
  return await axios.get(
    `https://dummyjson.com/products?limit=20&skip=${20 * count}`
  );
};

// 1st load for react-router-dom loader
export const initialLoader = async () => {
  const url = `https://dummyjson.com/products?limit=20&skip=0`;
  return await axios.get(url);
};

import axios from "axios";

export const getProducts = (count) => {
  return axios.get(
    `https://dummyjson.com/products?limit=20&skip=${20 * count}`
  );
};

import { apiFetch } from "./apiFetch";

const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  const data = await apiFetch(`${BASE_URL}/products`);
  return data.products;
};

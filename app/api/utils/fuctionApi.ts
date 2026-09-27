import { API_BASE_URL } from "../config/api";

export const getAllEvent = async () => {
  try {
    await fetch(`${process.env.API_URL as string} `)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } catch (error) {
    console.log(error);
  }
};

"use server";
import "dotenv/config";
export const backend = () => {
  return process.env.URL;
};

console.log(backend());

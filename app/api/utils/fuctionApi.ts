import { API_ENDPOINTS, API_BASE_URL } from "../config/api";

export const getAllEvents = async (endpoint: string) => {

    await fetch(`${API_BASE_URL}${API_ENDPOINTS[endpoint]}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
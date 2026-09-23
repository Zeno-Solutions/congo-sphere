import { get } from "https";
import { API_ENDPOINTS, API_BASE_URL } from "../config/api";

export const getAllEvent = async () => {

    try {
        await fetch(`${API_BASE_URL}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    } catch (error) {
        console.log(error);
        
    }
}

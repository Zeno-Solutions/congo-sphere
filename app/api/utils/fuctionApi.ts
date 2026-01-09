import { API_ENDPOINTS,API_BASE_URL } from "../config/api";

async function getAllEvents() {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.GET_ALL_EVENTS}`);
    const data = await response.json();
    return data;
}

async function getEventById(id: string) {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.GET_EVENT_BY_ID(id)}`);
    const data = await response.json();
    return data;
}
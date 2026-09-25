import { API_BASE_URL, API_ENDPOINTS } from "@/app/api/config/api";
async function fetchEvents() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}

export const events = await fetchEvents();

// Helper functions
export function getEventById(id: string) {
  return events.find((event: { id: string }) => event.id === id);
}

export function getEventsByCategory(category: string) {
  return events.filter(
    (event: { category: string }) => event.category === category,
  );
}

export function getUpcomingEvents() {
  const now = new Date();
  return events.filter(
    (event: { date: string }) => new Date(event.date) >= now,
  );
}

export function getFeaturedEvents() {
  return events.filter((event: { tags: string[] }) =>
    event.tags.includes("Featured Experience"),
  );
}

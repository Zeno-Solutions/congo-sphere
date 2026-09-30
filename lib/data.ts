import { API_BASE_URL, API_ENDPOINTS } from "@/app/api/config/api";
import { redirect } from "next/navigation";
async function fetchEvents() {
  try {
    const response = await fetch("https://api.congo-sphere.lemy.dev/events");

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching events:", error);

    // redirect("/error");
  }
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

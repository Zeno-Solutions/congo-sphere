import { API_ENDPOINTS, API_BASE_URL } from "../config/api";

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getAllEvents<T = unknown>() {
  return fetchApi<T>(API_ENDPOINTS.events.list);
}

export async function getEventById<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.events.getById(id));
}

export async function createEvent<T = unknown>(payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.events.create, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateEvent<T = unknown>(id: string, payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.events.update(id), {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteEvent<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.events.delete(id), {
    method: "DELETE",
  });
}

export async function registerEvent<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.events.register(id), {
    method: "POST",
  });
}

export async function cancelEventRegistration<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.events.cancelRegister(id), {
    method: "DELETE",
  });
}

export async function getEventHost<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.events.host(id));
}

export async function getEventAttendees<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.events.attendees(id));
}

export async function getMyEvents<T = unknown>() {
  return fetchApi<T>(API_ENDPOINTS.events.myEvents);
}

export async function getEventsByCategory<T = unknown>(category: string) {
  return fetchApi<T>(API_ENDPOINTS.events.byCategory(category));
}

export async function getAllUsers<T = unknown>() {
  return fetchApi<T>(API_ENDPOINTS.users.list);
}

export async function getUserById<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.users.getById(id));
}

export async function createUser<T = unknown>(payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.users.create, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateUser<T = unknown>(id: string, payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.users.update(id), {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteUser<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.users.delete(id), {
    method: "DELETE",
  });
}

export async function registerUser<T = unknown>(payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.auth.register, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function loginUser<T = unknown>(payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.auth.login, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getCurrentUser<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.auth.me, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
}

export async function forgotPassword<T = unknown>(payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.auth.forgotPassword, {
    method: "GET",
    body: JSON.stringify(payload),
  });
}

export async function resetPassword<T = unknown>(payload: unknown) {
  return fetchApi<T>(API_ENDPOINTS.auth.resetPassword, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getAllTickets<T = unknown>() {
  return fetchApi<T>(API_ENDPOINTS.tickets.list);
}

export async function getMyTickets<T = unknown>() {
  return fetchApi<T>(API_ENDPOINTS.tickets.myTickets);
}

export async function getTicketById<T = unknown>(id: string) {
  return fetchApi<T>(API_ENDPOINTS.tickets.getById(id));
}

export async function TestFunction() {
  console.log("Test function called");
}
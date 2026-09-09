import { API_ENDPOINTS, API_BASE_URL } from "../config/api";

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}, token?: string): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getAllEvents<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.list, {}, token);
}

export async function getEventById<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.getById(id), {}, token);
}

export async function createEvent<T = unknown>(payload: unknown, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.create, {
    method: "POST",
    body: JSON.stringify(payload),
  }, token);
}

export async function updateEvent<T = unknown>(id: string, payload: unknown, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.update(id), {
    method: "PUT",
    body: JSON.stringify(payload),
  }, token);
}

export async function deleteEvent<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.delete(id), {
    method: "DELETE",
  }, token);
}

export async function registerEvent<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.register(id), {
    method: "POST",
  }, token);
}

export async function cancelEventRegistration<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.cancelRegister(id), {
    method: "DELETE",
  }, token);
}

export async function getEventHost<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.host(id), {}, token);
}

export async function getEventAttendees<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.attendees(id), {}, token);
}

export async function getMyEvents<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.myEvents, {}, token);
}

export async function getEventsByCategory<T = unknown>(category: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.events.byCategory(category), {}, token);
}

export async function getAllUsers<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.users.list, {}, token);
}

export async function getUserById<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.users.getById(id), {}, token);
}

export async function createUser<T = unknown>(payload: unknown, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.users.create, {
    method: "POST",
    body: JSON.stringify(payload),
  }, token);
}

export async function updateUser<T = unknown>(id: string, payload: unknown, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.users.update(id), {
    method: "PUT",
    body: JSON.stringify(payload),
  }, token);
}

export async function deleteUser<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.users.delete(id), {
    method: "DELETE",
  }, token);
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
  return fetchApi<T>(API_ENDPOINTS.auth.me, {}, token);
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

export async function logoutUser<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.auth.logout, {
    method: "POST",
  }, token);
}

export async function getAllTickets<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.tickets.list, {}, token);
}

export async function getMyTickets<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.tickets.myTickets, {}, token);
}

export async function getTicketById<T = unknown>(id: string, token?: string) {
  return fetchApi<T>(API_ENDPOINTS.tickets.getById(id), {}, token);
}

export async function getTicketsByUserAndEvent<T = unknown>(token?: string) {
  return fetchApi<T>(API_ENDPOINTS.tickets.byUserAndEvent, {}, token);
}

export const authApi = {
  register: registerUser,
  login: loginUser,
  me: getCurrentUser,
  forgotPassword,
  resetPassword,
  logout: logoutUser,
};

export const userApi = {
  list: getAllUsers,
  getById: getUserById,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
};

export const eventApi = {
  list: getAllEvents,
  byId: getEventById,
  create: createEvent,
  update: updateEvent,
  delete: deleteEvent,
  register: registerEvent,
  cancelRegister: cancelEventRegistration,
  host: getEventHost,
  attendees: getEventAttendees,
  myEvents: getMyEvents,
  byCategory: getEventsByCategory,
};

export const ticketApi = {
  list: getAllTickets,
  myTickets: getMyTickets,
  getById: getTicketById,
  byUserAndEvent: getTicketsByUserAndEvent,
};

export async function TestFunction() {
  console.log("Test function called");
}
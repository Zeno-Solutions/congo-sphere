import { API_BASE_URL, API_ENDPOINTS } from "../../api/config/api";

type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

async function request<TResponse>(
  path: string,
  method: HttpMethod = "GET",
  body?: unknown,
): Promise<TResponse> {
  if (!API_BASE_URL) {
    throw new Error("L'URL de l'API est manquante (NEXT_PUBLIC_API_URL).");
  }

  const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}${path}`, {
    method,
    credentials: "include",
    headers: {
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      detail || `Erreur API ${response.status}: ${response.statusText}`,
    );
  }

  if (response.status === 204) {
    return undefined as TResponse;
  }

  return (await response.json()) as TResponse;
}

const get = <TResponse>(path: string) => request<TResponse>(path);
const post = <TResponse>(path: string, body?: unknown) =>
  request<TResponse>(path, "POST", body);
const patch = <TResponse>(path: string, body: unknown) =>
  request<TResponse>(path, "PATCH", body);
const remove = <TResponse>(path: string) => request<TResponse>(path, "DELETE");

export const api = {
  auth: {
    register: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.auth.register, body),
    login: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.auth.login, body),
    me: <TResponse>() => get<TResponse>(API_ENDPOINTS.auth.me),
    forgotPassword: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.auth.forgotPassword, body),
    resetPassword: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.auth.resetPassword, body),
    logout: <TResponse>() => post<TResponse>(API_ENDPOINTS.auth.logout),
  },
  users: {
    list: <TResponse>() => get<TResponse>(API_ENDPOINTS.users.list),
    create: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.users.create, body),
    getById: <TResponse>(id: string) =>
      get<TResponse>(API_ENDPOINTS.users.getById(id)),
    update: <TResponse>(id: string, body: unknown) =>
      patch<TResponse>(API_ENDPOINTS.users.update(id), body),
    delete: <TResponse>(id: string) =>
      remove<TResponse>(API_ENDPOINTS.users.delete(id)),
  },
  events: {
    list: <TResponse>() => get<TResponse>(API_ENDPOINTS.events.list),
    create: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.events.create, body),
    getById: <TResponse>(id: string) =>
      get<TResponse>(API_ENDPOINTS.events.getById(id)),
    update: <TResponse>(id: string, body: unknown) =>
      patch<TResponse>(API_ENDPOINTS.events.update(id), body),
    delete: <TResponse>(id: string) =>
      remove<TResponse>(API_ENDPOINTS.events.delete(id)),
    register: <TResponse>(id: string, body?: unknown) =>
      post<TResponse>(API_ENDPOINTS.events.register(id), body),
    cancelRegister: <TResponse>(id: string) =>
      remove<TResponse>(API_ENDPOINTS.events.cancelRegister(id)),
    host: <TResponse>(id: string, body?: unknown) =>
      post<TResponse>(API_ENDPOINTS.events.host(id), body),
    attendees: <TResponse>(id: string) =>
      get<TResponse>(API_ENDPOINTS.events.attendees(id)),
    myEvents: <TResponse>() => get<TResponse>(API_ENDPOINTS.events.myEvents),
    byCategory: <TResponse>(category: string) =>
      get<TResponse>(API_ENDPOINTS.events.byCategory(category)),
  },
  tickets: {
    list: <TResponse>() => get<TResponse>(API_ENDPOINTS.tickets.list),
    myTickets: <TResponse>() => get<TResponse>(API_ENDPOINTS.tickets.myTickets),
    getById: <TResponse>(id: string) =>
      get<TResponse>(API_ENDPOINTS.tickets.getById(id)),
    byUserAndEvent: <TResponse>(query = "") =>
      get<TResponse>(`${API_ENDPOINTS.tickets.byUserAndEvent}${query}`),
  },
  galerie: {
    list: <TResponse>() => get<TResponse>(API_ENDPOINTS.galerie.list),
    getById: <TResponse>(id: string) =>
      get<TResponse>(API_ENDPOINTS.galerie.getById(id)),
    create: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.galerie.create, body),
    update: <TResponse>(id: string, body: unknown) =>
      patch<TResponse>(API_ENDPOINTS.galerie.update(id), body),
    delete: <TResponse>(id: string) =>
      remove<TResponse>(API_ENDPOINTS.galerie.delete(id)),
  },
  actualites: {
    list: <TResponse>() => get<TResponse>(API_ENDPOINTS.actualites.list),
    getById: <TResponse>(id: string) =>
      get<TResponse>(API_ENDPOINTS.actualites.getById(id)),
    create: <TResponse>(body: unknown) =>
      post<TResponse>(API_ENDPOINTS.actualites.create, body),
    update: <TResponse>(id: string, body: unknown) =>
      patch<TResponse>(API_ENDPOINTS.actualites.update(id), body),
    delete: <TResponse>(id: string) =>
      remove<TResponse>(API_ENDPOINTS.actualites.delete(id)),
  },
  commentaires: {
    list: <TResponse>() => get<TResponse>(API_ENDPOINTS.commentaires.list),
  },
};

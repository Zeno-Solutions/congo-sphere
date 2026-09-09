/**
 * Configuration centralisée de l'API
 */
export const API_BASE_URL = process.env.API_URL || "https://api.congo-sphere.lemy.dev";

export const API_ENDPOINTS = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    me: "/auth/me",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    logout: "/auth/logout",
  },
  users: {
    list: "/users",
    create: "/users",
    getById: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`,
  },
  events: {
    list: "/events",
    create: "/events",
    getById: (id: string) => `/events/${id}`,
    update: (id: string) => `/events/${id}`,
    delete: (id: string) => `/events/${id}`,
    register: (id: string) => `/events/${id}/register`,
    cancelRegister: (id: string) => `/events/${id}/register`,
    host: (id: string) => `/events/${id}/host`,
    attendees: (id: string) => `/events/${id}/attendees`,
    myEvents: "/events/my-events",
    byCategory: (category: string) => `/events?category=${encodeURIComponent(category)}`,
  },
  tickets: {
    list: "/tickets",
    myTickets: "/tickets/my-tickets",
    getById: (id: string) => `/tickets/${id}`,
    byUserAndEvent: "/tickets",
  },
  galerie: {
    list: "/api/galerie",
    getById: (id: string) => `/api/galerie/${id}`,
    create: "/api/galerie",
    update: (id: string) => `/api/galerie/${id}`,
    delete: (id: string) => `/api/galerie/${id}`,
  },
  actualites: {
    list: "/api/actualites",
    getById: (id: string) => `/api/actualites/${id}`,
    create: "/api/actualites",
    update: (id: string) => `/api/actualites/${id}`,
    delete: (id: string) => `/api/actualites/${id}`,
  },
  commentaires: {
    list: "/api/commentaire",
  },
};

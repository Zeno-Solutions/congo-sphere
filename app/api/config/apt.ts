/**
 * Configuration centralisée de l'API
 * Utilise VITE_API_URL depuis .env, sinon localhost:5000
 */
export const API_BASE_URL = process.env.API_URL || 'https://iftplbackend.onrender.com';
export const API_ENDPOINTS = {
    auth: {
        login: '/auth/login',
        me: '/auth/me',
        logout: '/api/auth/logout',
        register: '/auth/register',
        forgot_pwd:'/auth/forgot-password',
        reset_pwd:'/auth/reset-password'
    },
    events: {
        list: '/events',
        getById: (id:string) => `/events/${id}`,
        byCategory: (categorie:string) => `/events/${categorie}`,
        create: '/events',
        update: (id:string) => `/events/${id}`,
        delete: (id:string) => `/events/${id}`,
    },
    galerie: {
        list: '/api/galerie',
        getById: (id:string) => `/api/galerie/${id}`,
        create: '/api/galerie',
        update: (id:string) => `/api/galerie/${id}`,
        delete: (id:string) => `/api/galerie/${id}`,
    },
    actualites: {
        list: '/api/actualites',
        getById: (id:string) => `/api/actualites/${id}`,
        create: '/api/actualites',
        update: (id:string) => `/api/actualites/${id}`,
        delete: (id:string) => `/api/actualites/${id}`,
    },
    commentaires: {
        list: '/api/commentaire',
    },
}

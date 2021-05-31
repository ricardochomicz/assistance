export const URI_BASE_API = 'http://localhost:8000/api'
export const API_VERSION = 'v1'
export const TOKEN_NAME = 'token_sanctum'
export const RESOURCES = {
    PROFILES: 'profiles',
    USERS: 'users',
    ROLES: 'roles',
    PERMISSIONS: 'permissions',
    CATEGORIES: 'categories',
    PRODUCTS: 'products'
}
export const TOKEN = window.localStorage.getItem('token')

import axios from 'axios';
import type { LoginResponse, ClientProfile } from './clientTypes';
import type { ApiResponse } from './api'; // Import ApiResponse definition

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const clientApi = axios.create({
    baseURL: `${API_BASE_URL}/client`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add JWT token
clientApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authService = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await clientApi.post<ApiResponse<LoginResponse>>('/auth/login', { email, password });
        return response.data.data; // Unwrap ApiResponse
    },

    register: async (data: any): Promise<ClientProfile> => {
        // Backend expects 'password' field, ensured by caller or here
        const response = await clientApi.post<ApiResponse<ClientProfile>>('/auth/register', data);
        return response.data.data; // Unwrap ApiResponse, returns Profile only
    },

    getMe: async (): Promise<ClientProfile> => {
        const response = await clientApi.get<ApiResponse<ClientProfile>>('/auth/me');
        return response.data.data; // Unwrap ApiResponse
    },

    // Helper to map Profile to User (Adapter Pattern for AuthContext)
    mapProfileToUser: (profile: ClientProfile) => ({
        id: profile.id,
        username: profile.email, // using email as username
        name: profile.displayName,
        role: 'CLIENT' as const,
        company: profile.company,
        avatar: undefined
    })
};

export default clientApi;

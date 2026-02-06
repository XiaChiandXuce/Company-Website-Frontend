import axios from 'axios';

// Environment variable for API URL, defaulting to local backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface LeadRequest {
    name: string;
    phone?: string;
    email: string;
    company?: string;
    message: string;
    source: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export const leadService = {
    createLead: async (data: LeadRequest) => {
        const response = await apiClient.post<ApiResponse<any>>('/leads', data);
        return response.data;
    },
};



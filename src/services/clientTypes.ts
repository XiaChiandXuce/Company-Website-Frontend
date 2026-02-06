export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    displayName: string;
    company?: string;
}

export interface ClientProfile {
    id: string;
    email: string;
    displayName: string;
    phone?: string;
    company?: string;
    status: string;
}

export interface LoginResponse {
    token: string;
    profile: ClientProfile;
}

export interface Project {
    id: string;
    title: string;
    description?: string;
    status: 'NEW' | 'IN_PROGRESS' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';
    progressPercent: number;
    updatedAt: string;
}

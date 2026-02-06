

export interface User {
    id: string;
    username: string;
    name: string;
    role: 'CLIENT' | 'ADMIN';
    avatar?: string;
    company?: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

// Mock User Data
const MOCK_USER: User = {
    id: 'u-123456',
    username: 'demo_client',
    name: 'Alex Chen',
    role: 'CLIENT',
    company: 'Future Tech Inc.',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Chen&background=0D8ABC&color=fff'
};

export const mockAuthService = {
    login: async (username: string, password: string): Promise<LoginResponse> => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (username === 'demo' && password === 'demo123') {
            return {
                token: 'mock-jwt-token-xyz-789',
                user: MOCK_USER
            };
        }

        throw new Error('Invalid credentials');
    },

    getCurrentUser: async (): Promise<User> => {
        return MOCK_USER;
    }
};

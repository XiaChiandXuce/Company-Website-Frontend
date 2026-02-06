import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authService } from '../services/authService';

interface User {
    id: string;
    username: string; // mapped from email
    name: string;
    role: 'CLIENT' | 'ADMIN';
    avatar?: string;
    company?: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: any) => Promise<void>; // Add register type
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Check for existing token on mount
    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem('auth_token');
            if (token) {
                try {
                    const profile = await authService.getMe();
                    setUser(authService.mapProfileToUser(profile));
                } catch (error) {
                    console.error('Failed to restore session:', error);
                    localStorage.removeItem('auth_token');
                }
            }
            setIsLoading(false);
        };
        initAuth();
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const response = await authService.login(email, password);
            localStorage.setItem('auth_token', response.token);
            const user = authService.mapProfileToUser(response.profile);
            setUser(user);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (data: any) => {
        setIsLoading(true);
        try {
            // 1. Register (Returns only profile, no token)
            await authService.register(data);

            // 2. Auto Login (Get token)
            const response = await authService.login(data.email, data.password);

            localStorage.setItem('auth_token', response.token);
            const user = authService.mapProfileToUser(response.profile);
            setUser(user);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setUser(null);
    };

    const value = {
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

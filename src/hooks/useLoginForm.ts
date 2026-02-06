import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface UseLoginFormReturn {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    displayName: string;
    setDisplayName: (name: string) => void;
    isRegister: boolean;
    setIsRegister: (isRegister: boolean) => void;
    error: string | null;
    isLoading: boolean;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useLoginForm = (): UseLoginFormReturn => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { login, register } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Type casting to access state cleanly
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            if (isRegister) {
                await register({
                    email,
                    password: password,
                    displayName: displayName || email.split('@')[0] // Fallback name
                });
            } else {
                await login(email, password);
            }
            navigate(from, { replace: true });
        } catch (err: any) {
            console.error('Auth failed:', err);

            // Prioritize backend structured error
            const data = err.response?.data;

            if (data?.code === 'USER_ALREADY_EXISTS') {
                setError('Account already exists. Please sign in instead.');
            } else if (data?.message) {
                setError(data.message);
            } else {
                setError('Authentication failed. Please check your credentials and try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        displayName,
        setDisplayName,
        isRegister,
        setIsRegister,
        error,
        isLoading,
        handleSubmit,
    };
};

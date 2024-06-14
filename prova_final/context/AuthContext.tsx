"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null;
    isAuthenticated: (data: SignIdData) => boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authError, setAuthError] = useState<string | null>(null);

    const router = useRouter();

    async function login({ username, password }: SignIdData) {
        try {
            if (username !== "" && password !== "") {
                router.push('/recipes');
                return;
            }

            setAuthError('Autenticação falhou. Por favor, verifique suas credenciais.');
        } catch (error) {
            setAuthError('Ocorreu um erro ao tentar fazer login.');
        }
    }

    function isAuthenticated(data: SignIdData): boolean {
        return data.username === "admin" && data.password === "admin";
    }

    return (
        <AuthContext.Provider value={{ login, authError, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

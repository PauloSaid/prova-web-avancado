"use client";

import { AuthContext, SignIdData } from "@/context/AuthContext";
import { useForm } from 'react-hook-form';
import { useContext } from "react";

const Home = () => {
    const { register, handleSubmit } = useForm<SignIdData>();
    const { login, authError } = useContext(AuthContext);

    const handleLogin = async (data: SignIdData) => {
        await login(data);
    }

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Faça login</h2>
                <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
                    <label htmlFor="username" className="mb-2">Usuário</label>
                    <input
                        {...register('username')}
                        type="text"
                        name='username'
                        id='username'
                        className="px-3 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Seu nome de usuário"
                    />

                    <label htmlFor="password" className="mb-2">Senha</label>
                    <input
                        {...register('password')}
                        type="password"
                        name='password'
                        id='password'
                        className="px-3 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Sua senha secreta"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Acessar
                    </button>
                </form>
                {authError && <p className="text-red-500 mt-2 text-center">{authError}</p>}
            </div>
        </div>
    );
}

export default Home;

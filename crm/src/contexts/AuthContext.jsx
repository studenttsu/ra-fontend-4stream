import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppApi } from '../api';
import TokenService from '../services/token-service';
import pubsubService from '../services/pubsub-service';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(TokenService.isTokenValid());
    const navigate = useNavigate();

    async function login(loginData) {
        try {
            const { access_token } = await AppApi.login(loginData);
            TokenService.setToken(access_token);

            setIsAuth(true);
            navigate('/');
        } catch(e) {
            setIsAuth(false);

            if (e.message) {
                alert(e.message);
            }
        }
    }

    function logout() {
        setIsAuth(false);
        navigate('/login');
        TokenService.removeToken();
    }

    pubsubService.on('logout', logout);

    const context = { isAuth, login, logout };

    return <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
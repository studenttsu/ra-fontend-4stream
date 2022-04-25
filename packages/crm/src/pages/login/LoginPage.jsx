import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthForm from "./AuthForm";

export function LoginPage() {
    const { isAuth, login } = useAuth();

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (<>
        <h1>Login Page</h1>
        <AuthForm onLogin={login} />
    </>)
}
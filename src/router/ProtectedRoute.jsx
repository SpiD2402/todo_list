import { Navigate } from "react-router-dom";
import  {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const isTokenExpired = (token) => {
        if (!token) {
            return true;
        }

        try {
            const { exp } = jwtDecode(token);
            if (!exp) {
                return true;
            }

            const currentTime = Date.now() / 1000;
            return exp < currentTime;
        } catch (error) {
            return true;
        }
    };


    if (token==null || isTokenExpired(token) ) {
        // Redirige al login si no hay un usuario autenticado
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
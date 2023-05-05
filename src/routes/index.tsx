import { BrowserRouter } from "react-router-dom";
import { AdmRoutes } from "./adm.routes";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { AuthRoutes } from "./auth.routes";
import { api } from "../services/api";
import { useAuth } from "../hooks/auth";
import { UserRoutes } from "./user.routes";

export function Routes() {
    const { user }: any = useAuth()

    return (
        <BrowserRouter>
            {user ? (user.isAdmin === "true" ? <AdmRoutes /> : <UserRoutes />) : <AuthRoutes />}
        </BrowserRouter>
    )
}
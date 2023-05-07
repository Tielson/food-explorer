import { BrowserRouter } from "react-router-dom";
import { AdmRoutes } from "./adm.routes";
import { AuthRoutes } from "./auth.routes";
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
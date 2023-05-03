import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'


interface Props {
    children: React.ReactElement | string
}

export const AuthContext = createContext({})

function AuthProvider({ children }: Props): JSX.Element {

    const [data, setData] = useState<any>({})

    async function signIn({ email, password }: { email: string, password: string }) {

        try {
            const response = await api.post("sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@sessions: user", JSON.stringify(user));
            localStorage.setItem("@sessions: token", token);

            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })


        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel entrar.")
            }

        }

    }
    function signOut() {
        localStorage.removeItem("@sessions: token")
        localStorage.removeItem("@sessions: user")

        setData({})
    }

    useEffect(() => {
        try {
            const token = localStorage.getItem("@sessions: token")
            const user: any = localStorage.getItem("@sessions: user")
        
            if (token && user) {
              api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
              setData({ token, user: JSON.parse(user) });
            } else {
            }
          } catch (err) {
            console.error("Erro de autenticação:", err);
            localStorage.removeItem("@sessions:token");
            localStorage.removeItem("@sessions:user");
          }
    }, [])


    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth } 
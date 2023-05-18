import { Container } from "./styles"
import poly from '../../img/Polygon 1.svg'
import food from '../../img/food explorer.svg'
import { useNavigate } from "react-router-dom";
import { ButtonSign } from "../../components/ButtonSign";
import { useEffect, useState } from 'react';
import { useAuth } from "../../hooks/auth"
import validator from "validator";


export function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn }: any = useAuth()

    const [verifyEmail, setverifyEmail] = useState("")
    const [verifyPassword, setverifyPassword] = useState("")

    function handleSingIn() {
        if (!validator.isEmail(email)) {
            return alert("Por gentileza colocar email valido")
        }

        signIn({ email, password })
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            if (email.trim() === '' || password.trim() === '') {
                return alert("Preencha todos os campos...")
            }
            if (email.trim() !== '' && password.trim() !== '') {
                handleSingIn();
            }
        }
    };

    useEffect(() => {
        setverifyEmail(() => validator.isEmail(email) ? 'filled' : "")
        setverifyPassword(() => password !== "" && password.length > 5 ? 'filled' : "")
    }, [email, password])


    return (
        <Container>
            <div className="left">
                <img src={poly} alt="polygono" />
                <img src={food} alt="food explorer" />
            </div>

            <div className="box">
                <div className="form">
                    <h1>Faça login</h1>
                    <form onSubmit={handleSingIn}>
                        <h2>Email</h2>
                        <input type="email"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            onChange={e => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={`${verifyEmail}`}
                            required
                        />
                        <h2>Senha</h2>
                        <input type="password"
                            placeholder="No mínimo 6 caracteres"
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={`${verifyPassword}`}
                            required
                        />
                        <ButtonSign onClick={handleSingIn} title="Entrar"></ButtonSign>
                    </form>
                    <div className="toCreate">
                        <button onClick={() => navigate("/signup")}>Criar uma conta</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
import { Container } from "./styled"
import poly from '../../img/Polygon 1.svg'
import food from '../../img/food explorer.svg'
import { useNavigate } from "react-router-dom";
import { ButtonSign } from "../../components/ButtonSign";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";


export function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleSingUp() {
        if (!name || !email || !password) {
            return alert("Por gentileza preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuario cadastrado com sucesso 🥰")
                navigate("/")
            })
            .catch(error => {
                if (error) {
                    alert(error.response.data.message);
                }
                else {
                    alert("Não foi possível cadastar")
                }
            })
    }

    return (
        <Container>
            <div className="left">
                <img src={poly} alt="polygono" />
                <img src={food} alt="food explorer" />
            </div>

            <div className="box">
                <div className="form">
                    <h1>Crie sua conta</h1>
                    <form>
                        <h2>Seu nome</h2>
                        <input type="email" placeholder="Exemplo: Maria da Silva" onChange={(e) => setName(e.target.value)} />
                        <h2>Email</h2>
                        <input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={(e) => setEmail(e.target.value)} />
                        <h2>Senha</h2>
                        <input type="password" placeholder="No mínimo 6 caracteres" onChange={(e) => setPassword(e.target.value)} />
                        <ButtonSign onClick={handleSingUp} title="Criar Conta"></ButtonSign>
                    </form>
                    <div className="toCreate">
                        <button onClick={()=> navigate("/")}>Já tenho uma conta</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
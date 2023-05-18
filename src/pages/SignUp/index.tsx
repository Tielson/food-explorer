import { Container } from "./styled"
import poly from '../../img/Polygon 1.svg'
import food from '../../img/food explorer.svg'
import { useNavigate } from "react-router-dom";
import { ButtonSign } from "../../components/ButtonSign";
import { useEffect, useState } from 'react';
import { api } from "../../services/api";

import validator from "validator";

export function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [verifyName, setverifyName] = useState("")
    const [verifyEmail, setverifyEmail] = useState("")
    const [verifyPassword, setverifyPassword] = useState("")




    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            if (!name || !email || !password) {
                return alert("Por gentileza preencha todos os campos!");
            }
            if (email.trim() !== '' && password.trim() !== '') {
                handleSingUp();
            }
        }
    };

    function handleSingUp() {
        if(!name || !email || !password){
            return alert("Por gentileza preencher todos os campos!");
        }

        if (name !== ""  &&  name.length < 6) {
            return alert("Por gentileza Colocar um nome valido");
        }
        if ( !validator.isEmail(email)) {
            return alert("Por gentileza Colocar um e-mail valido");
        }
        if (password !== "" &&  password.length < 5) {
            return alert("Por gentileza Colocar uma senha valida");
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

    useEffect(() => {
        setverifyName(() => name !== ""  &&  name.length > 5 ? 'filled' : "")

        setverifyEmail(() => validator.isEmail(email) ? 'filled' : "")

        setverifyPassword(() => password !== "" &&  password.length > 5  ? 'filled' : "")

        console.log(verifyEmail, verifyName, verifyPassword)

    }, [email, name, password])

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
                        <input
                            type="name"
                            placeholder="Exemplo: Maria da Silva"
                            onChange={(e) => { setName(e.target.value) }}
                            onKeyDown={handleKeyDown}
                            className={`${verifyName}`}
                            required
                        />
                        <h2>Email</h2>
                        <input
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={`${verifyEmail}`}
                            required
                        />
                        <h2>Senha</h2>
                        <input
                            type="password"
                            placeholder="No mínimo 6 caracteres"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={`${verifyPassword}`}
                            required


                        />
                        <ButtonSign onClick={handleSingUp} title="Criar Conta"></ButtonSign>
                    </form>
                    <div className="toCreate">
                        <button onClick={() => navigate("/")}>Já tenho uma conta</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
import { Container } from "./styles";
import logo from '../../img/Frame foodeAdm.png'
import { ButtonHeader } from "../ButtonsHeader";
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from "../Input";
import singOut from '../../img/SignOut.svg'
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { cart } from "../../hooks/cart";
import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineMenu } from "react-icons/hi";
import { ButtonInclude } from "../ButtonInclude";
import { ButtonsHeaderAdm } from "../ButtonsHeaderAdm";
import { api } from "../../services/api";
import { ButtonMobile } from "../ButtonMobile";

export function HeaderAdm({ handleSearch, dt = false }: { handleSearch?: (e: any) => any, dt?: boolean }) {

    const { signOut }: any = useAuth()
    const navigate = useNavigate()

    const [hidee, setHide] = useState('hide')
    const [pendente, setPendente] = useState([])

    function SignOut() {
        signOut()
        navigate("/")
    }

    function handleInput() {

        if (hidee === 'hide') {
            setHide('')
        }
        else {
            setHide('hide')
        }
    }
    window.onresize = function () {
        if (window.innerWidth >= 940) {
            setHide('hide')
        }

    };

    useEffect(() => {
        async function order() {
            try {
                const { data } = await api.get("/order/ordernew")
                setPendente(data)
            } catch (error) {
                console.log(error)
            }
        }
        order()
    }, [pendente])
    return (
        <Container dt={dt} >
            <div className={`minw ${hidee}`} >
                <div className="m">
                    <button onClick={() => handleInput()}><HiOutlineXMark /> Menu</button>
                </div>
                <div className="s">
                    <div className="i">
                        <Input icon={AiOutlineSearch} onChange={(e: any) => { if (handleSearch) handleSearch(e.target.value) }} placeholder="Busque por pratos ou ingredientes" />
                    </div>

                    <div className="favori">
                        <ButtonHeader onClick={() => navigate("/addDish")} title="Novo prato" isAdmin={true} style={{ background: "none" }} />
                    </div>
                    <div className="b">
                        <button onClick={SignOut} >
                            Sair
                        </button>
                    </div>

                </div>
            </div>
            {/* <-----==== aparece depois de apertar o button ====----> */}
            <div className="menu ">
                <button onClick={() => handleInput()}>
                    <HiOutlineMenu />
                </button>
            </div>

            <div >
                <button onClick={() => navigate("/")} >
                    <img src={logo} alt="polygono" />
                </button>
            </div>

            <div className="p">
                <ButtonMobile isAdmin={true} title={`${pendente.length}`} />
            </div>

            {/* <-----====  ====----> */}


            <div className="inp">
                <Input onChange={(e: any) => { if (handleSearch) handleSearch(e.target.value) }} icon={AiOutlineSearch} placeholder="Busque por pratos ou ingredientes" />
            </div>
            <div className="NS">


                <div>
                    <ButtonInclude title="Novo prato" onClick={() => navigate("/adddish")} />
                </div>

                <div>
                    <ButtonsHeaderAdm  onClick={() => navigate("/orderhistory")} title={`Pedidos (${pendente.length})`} />
                </div>


                <button onClick={SignOut} className="signOut">
                    <img src={singOut} alt="Sainda" />
                </button>

            </div>

        </Container >

    )
}
import { Container } from "./styles";
import logo from '../../img/Frame 5946.svg'
import { ButtonHeader } from "../ButtonsHeader";
import { ButtonMobile } from "../ButtonMobile";
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from "../Input";
import singOut from '../../img/SignOut.svg'
import { useNavigate } from "react-router-dom";
import { cart } from "../../hooks/cart";
import { HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Header({ isAdmin, handleSearch }: { isAdmin?: boolean, handleSearch?: (e: any) => any }) {

    const { signOut } : any= useAuth()
    const { cartItem }: any = cart()
    const navigate = useNavigate()


    const [hidee, setHide] = useState('hide')

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


    return (
        <Container>
            <div className={`minw ${hidee}`} >
                <div className="m">
                    <button onClick={() => handleInput()}><HiOutlineXMark /> Menu</button>
                </div>
                <div className="s">
                    <div className="i">
                        <Input icon={AiOutlineSearch} onChange={(e: any) => { if (handleSearch) handleSearch(e.target.value) }} placeholder="Busque por pratos ou ingredientes" />
                    </div>

                    <div className="favori">
                        <button onClick={() => navigate("/ordersusers")}> Histórico de pedidos</button>
                    </div>

                    <div className="favori">
                        <button onClick={() => navigate("/favorites")}> Favoritos</button>
                    </div>
                    <div className="b">
                        <button onClick={() => SignOut} >
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
                <ButtonMobile title={`${cartItem.length}`} isAdmin={isAdmin} />
            </div>
            {/* <-----====  ====----> */}

            <div className="iw">
                <Input icon={AiOutlineSearch} onChange={(e: any) => { if (handleSearch) handleSearch(e.target.value) }} placeholder="Busque por pratos ou ingredientes" />
            </div>
            <div className="favori">
                <button onClick={() => navigate("/favorites")}> Favoritos</button>
            </div>
            <div className="favori">
                <button onClick={() => navigate("/ordersusers")}> Histórico de pedidos</button>
            </div>
            <div >
                <ButtonHeader onClick={() => navigate("/requests")} title={`Pedidos (${cartItem.length})`} isAdmin={isAdmin} />
            </div>
            <button onClick={SignOut} className="signOut">
                <img src={singOut} alt="Sainda" />
            </button>





        </Container>

    )
}
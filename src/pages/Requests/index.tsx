import { Header } from "../../components/Header";
import { cart } from "../../hooks/cart";
import { api } from "../../services/api";
import { Container } from "./styles";
import { SetStateAction, useState, useRef, useEffect } from 'react';
import imgp from '../../img/pix.png'
import pix from '../../img/pixx.png'
import cred from '../../img/CreditCard.png'
import InputMask from "react-input-mask";
import { Footer } from "../../components/Footer";
import { ButtonInclude } from "../../components/ButtonInclude";
import { useNavigate } from "react-router-dom";

export function Requests() {

    const { cartItem, removeFromCart, valueTotal, ApagarCart }: any = cart()

    const [classeAtivaPix, setClasseBotaoPix] = useState('');
    const [classeAtivaCred, setClasseBotaoCred] = useState('hide');
    const [activeP, setActiveP] = useState('active')
    const [activeC, setActiveC] = useState('')
    const [cardNumber, setCardNumber] = useState('');
    const [hidee, setHide] = useState('')
    const [itens, setItens] = useState('')

    const [search, setSearch] = useState('')
    const mobileRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate()


    function handleSearch(event: any): void {
        setSearch(event)
    }


    function handleClickPix() {
        setClasseBotaoPix('');
        setClasseBotaoCred('hide')
        setActiveP('active')
        setActiveC('')
    }

    function handleClickCred() {
        setClasseBotaoPix('hide');
        setClasseBotaoCred('cred')
        setActiveP('')
        setActiveC('active')

    }

    function handlePayment() {
        setHide('hide')
        setItens('hide')
        if (mobileRef.current) {
            mobileRef.current.style.display = 'block';
        }

    }


    async function handleFinish() {
        const detailing = cartItem.map((item: any) => `${item.quantity}x ${item.product.name}`).join(', ');
        try {
            if (!detailing) {
                return
            }
            await api.post("/order", {
                status: 'Pendente',
                detailing
            })
            ApagarCart()
            navigate("/ordersusers")
            alert("Pedido feito com sucesso")
        } catch (error) {
            console.log(error)
        }


    }

    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        setCardNumber(event.target.value);
    }
    return (
        <Container>
            <Header handleSearch={handleSearch} />
            <div className="box">
                <div className={`section ${itens}`}>
                    <h1>MEU PEDIDO</h1>
                    <div className="dishs">
                        {
                            cartItem.filter((e: any) => e.product.name.toLowerCase().includes(search.toLowerCase()))
                                .map((dish: any) => (
                                    <button>
                                        <div className="dish-fav">
                                            <img src={`${api.defaults.baseURL}/files/${dish.product.img}`} alt="" />
                                            <div className="rem">

                                                <h1> {dish.quantity} x {dish.product.name} <span>{`R$ ${dish.product.price}`}</span></h1>
                                                <button onClick={(e: any) => removeFromCart(dish.product.id)}>Excluir</button>
                                            </div>
                                        </div>
                                    </button>
                                ))
                        }
                    </div>
                    <h2>{`Total: R$ ${valueTotal.toFixed(2)}`}</h2>
                    <button onClick={handlePayment} className={`av ${hidee}`}>Avançar</button>
                </div>


                <div className="section mobile" ref={mobileRef}>
                    <h1>PAGAMENTO</h1>
                    <div className="div">
                        <div className="div2">
                            <div>
                                <button onClick={handleClickPix} className={`pix ${activeP}`}>
                                    <img src={pix} alt="pix" />  PIX
                                </button>
                            </div>
                            <div>
                                <button onClick={handleClickCred} className={`cred ${activeC}`}>
                                    <img src={cred} alt="credito" /> Crédito
                                </button>
                            </div>
                        </div>
                        <div className={`payment ${classeAtivaPix}`}>
                            <img src={imgp} alt="" />
                        </div>
                        <div className={`payment ${classeAtivaCred}`}>
                            <div>
                                <h2>Número do Cartão</h2>
                                <InputMask
                                    id="card-number-input"
                                    mask="9999 9999 9999 9999"
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="VS">
                                <div>
                                    <h2>Validade</h2>
                                    <InputMask
                                        id="date-input"
                                        mask="99/99"
                                        placeholder="04/25" />
                                </div>
                                <div>
                                    <h2>CVC</h2>
                                    <InputMask
                                        type="text"
                                        id="password-input"
                                        mask="999"
                                        placeholder="000"
                                    />
                                </div>

                            </div>

                            <ButtonInclude onClick={() => handleFinish()} title="Finalizar pagamento" />

                        </div>
                    </div>
                </div>
            </div>
            <Footer pgD />
        </Container >
    )
}



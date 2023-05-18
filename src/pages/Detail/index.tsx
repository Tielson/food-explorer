import { Header } from "../../components/Header";
import { Container } from "./styles";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiSubtractLine } from 'react-icons/ri';
import { Tags } from "../../components/Tags";
import { ButtonInclude } from "../../components/ButtonInclude";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../../hooks/cart";


export function Detail() {
    const { addCart, cartItem, removeFromCart }: any = cart()

    const params = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState<any>({})
    const avatarUrl = data.img ? `${api.defaults.baseURL}/files/${data.img}` : '';
    const [count, setCount] = useState(cartItem.find((product: any) => product.product.id == params.id)?.quantity || 0)
    const [titleButton, setTitleButton] = useState(count < 1 ? 'Incluir' : 'Alterar')




    function handleCountAdd() {
        setCount((prevCount: any) => prevCount + 1)
    }

    function handleCountSubtract() {
        if (count < 1) {
            return
        }
        setCount((prevCount: any) => prevCount - 1)
    }

    function toggleButon() {
        if (count < 1) {
            setTitleButton('Incluir')
            removeFromCart(Number(params.id))
        } else {
            setTitleButton('Alterar')
        }
    }

    useEffect(() => {
        async function fetchDish() {

            api.get(`/dish/preview/${params.id}`)
                .then(data => setData(data.data[0]))
                .catch(error => {
                    console.log(error.response.data.message)
                })

        }
        fetchDish()

    }, [])
    return (
        <Container>
            <Header />
            <div className="section">

                <div className="imgButton">
                    <button onClick={() => navigate(-1)}><MdOutlineArrowBackIosNew /> Voltar</button>
                </div>
                <img className="im" src={avatarUrl} alt="img do prato" />

                <div className="text">
                    <h1>{data.nameD}</h1>
                    <p>{data.description}</p>
                    <Tags data={[data.name]} />
                    <div className="quantity">
                        <button onClick={handleCountSubtract} className="quantityB"><RiSubtractLine /></button>
                        <span>{count}</span>
                        <button onClick={handleCountAdd} className="quantityB"><AiOutlinePlus /></button>
                        <ButtonInclude
                            onAddCart={() => addCart({ id: data.id, name: data.nameD, price: data.price, img: data.img }, count)}
                            onToggleButton={() => toggleButon()}
                            title={`${titleButton} ∙ R$ ${data.price}`}
                            verify={titleButton} 
                            />
                            
                    </div>
                </div>
            </div>
            <Footer pgD />

        </Container>
    )
}
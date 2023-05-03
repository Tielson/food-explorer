import { Container } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { ButtonInclude } from "../ButtonInclude";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { cart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Dish({ img, name, description, price, id }: { img: any, name: string, description: string, price: string, id: string }) {

    const avatarUrl = `${api.defaults.baseURL}/files/${img}`
    const navigate = useNavigate()
    const { user }: any = useAuth()
    
    const [count, setCount] = useState(0)
    const [isFavorite, setIsFavorite] = useState(
        localStorage.getItem(`favorite_${id}`) === "true" ? true : false
    );

    const { addCart }: any = cart()

    function handleCountAdd() {
        setCount(prevCount => prevCount + 1)
    }

    function handleCountSubtract() {
        if (count < 1) {
            return
        }
        setCount(prevCount => prevCount - 1)
    }

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        localStorage.setItem(`favorite_${id}`, isFavorite.toString());
    }, [isFavorite]);

    return (
        <Container>


            <label
                className={`favorite-button ${isFavorite ? 'label-favorite' : ''}`}
                htmlFor={`favorite${id}`}
            >
                <input
                    type="checkbox"
                    id={`favorite${id}`}
                    name={`favorite${id}`}
                    checked={isFavorite}
                    onChange={handleFavorite}
                />
                <span className="heart">{isFavorite === true ? '❤️' : '🤍'}</span>
            </label>
            <button onClick={() => navigate(`/detail/${id}`)} className="nav">
                <img src={avatarUrl} alt="foto do prato" srcSet={`${avatarUrl} 1.5x, ${avatarUrl} 2x `} />
                <picture></picture>
                <picture></picture>

                <h2> {name} &gt;</h2>
                <h3>{description} </h3>

                <h4>R$ {price}</h4>

            </button>
            <div className="buttons">
                <div className="quantity">
                    <button onClick={handleCountSubtract} > <AiOutlineMinus /></button>
                    <p>{count}</p>
                    <button onClick={handleCountAdd}><AiOutlinePlus /></button>
                </div>
                <div className="incluir">
                    <ButtonInclude onClick={() => addCart({ id, name, price, img }, count)} title="Incluir" />
                </div>
            </div>

        </Container>
    );
}
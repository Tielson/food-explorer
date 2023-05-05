
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container } from "./styles"
import { useEffect, useState } from 'react';
import img from '../../img/pratos/r1.png'
import { useNavigate } from "react-router-dom";


export function Favorites() {

    const [dishs, setDishs] = useState([])
    const navigate = useNavigate()

    const trueFavorites = Object.entries(localStorage)
        .filter(([key, value]) => value === "true")
        .map(([key, value]) => key.slice("favorite_".length));

    const [search, setSearch] = useState('')

    function handleSearch(event: any): void {
        setSearch(event)
    }




    const handleFavorite = (id: any) => {
        localStorage.removeItem(`favorite_${id}`)
        const t = trueFavorites.filter((e: any) => e.id === id)
        t.splice(1, 1);
    };




    useEffect(() => {
        async function a() {
            try {
                const { data }: any = await api.get("/dish/all")
                setDishs(data)
            } catch (error) {
                console.log(error)
            }
        }
        a()
    }, [trueFavorites]);

    return (
        <Container>
            <Header handleSearch={handleSearch} />

            <div className="section">
                <div className="box">
                    <h1>MEUS FAVORITOS</h1>
                    <div className="ss">
                        {
                            dishs.filter((e: any) => trueFavorites.includes(e.id.toString()))
                                .filter((e: any) => e.name.toLowerCase().includes(search.toLowerCase()))
                                .map((dish: any) => (
                                    <div className="org">
                                        <button className="dish-fav" onClick={() => navigate(`/detail/${dish.id}`)}>
                                            <img src={`${api.defaults.baseURL}/files/${dish.img}`} alt="" />
                                        </button>
                                        <div className="dish-fav">
                                            <div className="rem">
                                                <button className="dish-fav" onClick={() => navigate(`/detail/${dish.id}`)}>
                                                    <h1>{dish.name}</h1>
                                                </button>
                                            </div>
                                        <button onClick={(e: any) => handleFavorite(dish.id)}>Remover dos favoritos</button>
                                        </div>
                                    </div>

                                ))}
                    </div >
                </div >
            </div >

            <Footer pgD />

        </Container >
    )
}


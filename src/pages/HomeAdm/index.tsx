import { Container } from "./styles";
import maskGroup from "../../img/maskGroup.png"
import { Footer } from "../../components/Footer";
import { Slide } from "../../components/Slider";
import { HeaderAdm } from "../../components/HeaderAdm";
import { DishAdm } from "../../components/DishAdm";

import { useState, useEffect } from 'react'
import { api } from "../../services/api";
import { SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export function HomeAdm() {
    const [meal, setMeal] = useState([])
    const [dessert, setDessert] = useState([])
    const [drink, setDrink] = useState([])

    const [search, setSearch] = useState('')

    function handleSearch(event: any): void {
        setSearch(event)
    }


    useEffect(() => {
        api.get("dish/meal")
            .then(data => setMeal(data.data))
            .catch(error => {
                console.log(error.response.data.message)
            })
        api.get("dish/dessert")
            .then(data => setDessert(data.data))
            .catch(error => {
                console.log(error.response.data.message)
            })
        api.get("dish/drink")
            .then(data => setDrink(data.data))
            .catch(error => {
                console.log(error.response.data.message)
            })
    }, [])
    return (
        <Container>
            <HeaderAdm handleSearch={handleSearch} />
            <div className="section">
                <div className="gradient">
                    <div className="imgMaskGroup">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={maskGroup} />
                            <img src={maskGroup} alt="" />
                        </picture>
                    </div>
                    <div className="textGradient">
                        <h1>Sabores inigualáveis</h1>
                        <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
                    </div>
                </div>

                <div className="swiper-container">

                    <h1>Refeições</h1>
                    
                    <Slide>
                        {meal.filter((e: any) => e.nameD.toLowerCase().includes(search.toLowerCase()))
                            .map((e: any) => (
                                <SplideSlide>
                                    <DishAdm key={(e.id)} id={e.id} img={e.img} name={e.nameD} description={e.description} price={e.price} />
                                </SplideSlide>
                            ))}
                    </Slide>



                    <h1>Sobremesas</h1>
                    <Slide>
                        {dessert.filter((e: any) => e.nameD.toLowerCase().includes(search.toLowerCase()))
                            .map((e: any) => (
                                <SplideSlide>
                                    <DishAdm key={(e.id)} id={e.id} img={e.img} name={e.nameD} description={e.description} price={e.price} />
                                </SplideSlide>
                            ))}
                    </Slide>


                    <h1>Bebidas</h1>
                    <Slide>
                        {drink.filter((e: any) => e.nameD.toLowerCase().includes(search.toLowerCase()))
                            .map((e: any) => (
                                <SplideSlide>
                                    <DishAdm key={(e.id)} id={e.id} img={e.img} name={e.nameD} description={e.description} price={e.price} />
                                </SplideSlide>
                            ))}
                    </Slide>


                </div>
            </div>
            <Footer />


        </Container>
    );
}
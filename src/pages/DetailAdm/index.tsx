import { ButtonInclude } from "../../components/ButtonInclude";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { Tags } from "../../components/Tags";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function DetailAdm() {

    const [data, setData] = useState<any>({})
    const avatarUrl = data.img ? `${api.defaults.baseURL}/files/${data.img}` : '';

    const params = useParams()
    const navigate = useNavigate()

    function handleEdited(){
        navigate(`/toeditdish/${data.id}`)
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
            <HeaderAdm  dt={true}/>
            <div className="section">

                <div className="imgButton">
                    <button onClick={ ()=> navigate(-1)} ><MdOutlineArrowBackIosNew /> Voltar</button>
                </div>
                    <img className="im" src={avatarUrl} alt="img do prato" />

                <div className="text">
                    <h1>{data.nameD}</h1>
                    <p>{data.description} </p>
                    <Tags data={[data.name]} />
                    <div className="quantity">
                        <ButtonInclude onClick={() => handleEdited()}  title={`Editar prato`} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer pgD />
            </div>
        </Container>
    )
}
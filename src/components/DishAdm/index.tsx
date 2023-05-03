import { Container } from "./styles";
import { BiPencil } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function DishAdm({ img, name, description, price, id }: { img: string, name: string, description: string, price: string, id:any }) {
    const navigate = useNavigate()

    const avatarUrl = `${api.defaults.baseURL}/files/${img}`
    
    function handleDetails(id:any) {
        navigate(`/detailadm/${id}`)
      }
    
    return (
        <Container>
            <button onClick={(e:any) => handleDetails(id)} >

                <BiPencil className="heart" />
                <img src={avatarUrl} alt="foto do prato" />

                <h2> {name}  &gt;</h2>
                <h3>{description} </h3>

                <h4>R$ {price}</h4>
            </button>

        </Container>
    );
}
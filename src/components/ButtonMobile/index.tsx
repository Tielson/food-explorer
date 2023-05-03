import { Container } from "./styles";
import vector from '../../img/Vector1.svg'
import { useNavigate } from "react-router-dom";

export function ButtonMobile({ isAdmin = false, title, style, ...rest }: { isAdmin?: boolean , title?:string,  style?: React.CSSProperties}) {

    
    const navigate = useNavigate()
    return (

        <Container style={style} onClick={() =>{isAdmin ? navigate("/requests") : navigate("/requests")}} isAdmin={isAdmin}
            type="button"
            {...rest}
        >
            { <div className="bu"> <img src={vector} alt="papel" /> <p>{title} </p></div>}
        </Container>
    )
}
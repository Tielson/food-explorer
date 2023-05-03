import { Container } from "./styles";


export function ButtonInclude({ title, onClick, ...rest }: { title: string, onClick?: () => void }) {
    


    return (
        <Container onClick={onClick}
            type="button"
            {...rest}>
            {title}
        </Container>

    )
}
import { Container } from "./styles";
import footer from "../../img/footer.svg"

export function Footer({ pgD = false }: { pgD?: boolean }) {
    return (
        <Container pgD={pgD}>
            <footer>
                <div><img src={footer} alt="roda pé" /></div>
                <div><p>© 2023 - Todos os direitos reservados.</p></div>
            </footer>
        </Container>
    )
}
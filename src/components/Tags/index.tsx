import { Container } from "./styles";

export function Tags({ data }: { data: [string] }) {
    return (
        <Container>
            { data &&  data.map(e => e?.split(',').map(p => (
                    <div>{p}</div>
                )))
            }
        </Container>
    )
}
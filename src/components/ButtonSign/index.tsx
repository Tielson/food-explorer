import { Container } from "./styles";

export function ButtonSign({ title, loading = false, ...rest }: { title: string, onClick: () => void, loading?: boolean }) {
    return (

        <Container

            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando ...' : title}
        </Container>
    )
}
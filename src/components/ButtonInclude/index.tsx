import { Container } from "./styles";

export function ButtonInclude({ title, onAddCart, onToggleButton, verify, ...rest }: { title: string, onAddCart?: () => void, onToggleButton?: () => void, verify?: string }) {
    return (
        <Container title={verify}
            onClick={() => { onAddCart?.(), onToggleButton?.() }}
            type="button"
            {...rest}>
            {title}
        </Container>

    )
}
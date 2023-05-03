import { Container } from "./styles";

export function Input({ icon: Icon, placeholder, ...rest }: { icon: any, placeholder: string, onChange: (e: any) => any }, isAdm: boolean) {
    return (
        <Container >
            {Icon && <Icon />}
            <input {...rest} placeholder={placeholder} />
        </Container>
    )
}
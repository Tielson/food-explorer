import { Container } from "./styles";


export function Textarea({ defaultValue, ...rest }: { placeholder: string, defaultValue?: string, onChange:any, value?: string}) {
  return (
    <Container {...rest}>
      {defaultValue}
    </Container>
  )
}
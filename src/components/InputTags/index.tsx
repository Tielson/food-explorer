import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"


export function InputTags({ isNew = false, value, onClick, ...rest }: {  placeholder: string, value?: string, isNew?: boolean, onChange?: any, onClick: any }) {

    return (
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest} />

            <button
                className={isNew ? 'button-add' : 'button-delete'}
                onClick={onClick}
                type="button"
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}
import { SetStateAction, useEffect, useState } from "react";
import { Container, Arrow, Column } from "./styles";
import { api } from "../../services/api";
import { BiDizzy } from "react-icons/bi";



export function TableAdm({ status, code, detailing, id, updated_at, user_id }: { status: string, code: string, detailing: string, id: string, updated_at: string, user_id: string }) {


    const [selectedId, setSelectedId] = useState<any>(status);

    const handleSelect = (event: any) => {
        setSelectedId(event.target.value);
    };

    const data = new Date(updated_at);
    const dataFormatada = data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
    });
    const horaFormatada = data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    async function s() {
        try {
            console.log(id)
            await api.put(`/order/pedido/${id}`, {
                status: selectedId,
                id,
                user_id
            })
            location.reload()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container cor={selectedId} key={id}>
            <Arrow cor={selectedId} key={id}>
                <Column className="status">
                    <button onClick={() => s()} className="s"> <BiDizzy /></button>
                     <select onChange={handleSelect} value={selectedId} id="items">
                        <option key="1">Pendente</option>
                        <option key="2">Preparando</option>
                        <option key="3">Entregue</option>
                    </select>
                </Column >
                <Column className="code">{code}</Column>
                <Column className="detailing">{detailing}</Column>
                <Column className="updated_at">{`${dataFormatada} ás ${horaFormatada}`}</Column>
            </Arrow>


            <div className="mobile hide" >
                <div className="codeDateM"> <p> {code}  &nbsp; {` ${dataFormatada} ás ${horaFormatada}`}</p></div>
                <div className="detailingM">{detailing}</div>

                <div className="statusM">
                    <button onClick={() => s()} className="sM"> <BiDizzy /></button>
      
                    <select onChange={handleSelect} value={selectedId} id="items">
                        <option key="1">Pendente</option>
                        <option key="2">Preparando</option>
                        <option key="3">Entregue</option>
                    </select>
                </div>
            </div>
        </Container>
    )
}
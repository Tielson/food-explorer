import { SetStateAction, useEffect, useState } from "react";
import { Container, Arrow, Column } from "./styles";
import { api } from "../../services/api";



export function Table() {

    const [orders, setOrders] = useState<any>([])

    useEffect(() => {
        async function response() {
            try {
                const { data }: any = await api.get("/order/toview")
                setOrders(data)
            } catch (error) {
                console.log(error)
            }
        }
        response()
    }, [orders])


    return (
        <Container >
            <table>
                <thead>
                    <Arrow>
                        <Column>Status</Column>
                        <Column>Código</Column>
                        <Column>Detalhamento</Column>
                        <Column>Data e hora</Column>
                    </Arrow>
                </thead>
                <tbody>
                    {
                        orders.map((order: any) => {
                            const data = new Date(order.updated_at);
                            const dataFormatada = data.toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                            });
                            const horaFormatada = data.toLocaleTimeString('pt-BR', {
                                hour: '2-digit',
                                minute: '2-digit',
                            });


                            return (
                                <Arrow cor={order.status} key={order.id}>
                                    <Column > {order.status}</Column>
                                    <Column>{order.code}</Column>
                                    <Column>{order.detailing}</Column>
                                    <Column>{`${dataFormatada} ás ${horaFormatada}`}</Column>
                                </Arrow>
                            );
                        })
                    }
                </tbody>
            </table>

            {orders.map((order: any) => {
                const data = new Date(order.updated_at);
                const dataFormatada = data.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                });
                const horaFormatada = data.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                });

                return (
                    <Container cor={order.status}>
                        <div className="mobile" key={order.id} >
                            <div className="codeDateM"> <p>{order.code} &nbsp;&nbsp; &nbsp; &nbsp;{order.status} &nbsp;&nbsp;&nbsp; {`${dataFormatada} ás ${horaFormatada}`}</p></div>
                            <div className="detailingM">{order.detailing}</div>
                        </div>
                    </Container>
                )
            })
            }
        </Container>
    )
}
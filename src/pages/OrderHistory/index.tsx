import { useEffect, useState } from "react";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Container } from "./styles";
import { api } from "../../services/api";
import { Column } from "../../components/Table/styles";
import { TableAdm } from "../../components/TableAdm";
import { Footer } from "../../components/Footer";

export function OrderHistory() {
    const [orders, setOrders] = useState<any>([])
    useEffect(() => {
        async function response() {
            try {
                const { data }: any = await api.get("/order")
                setOrders(data)

            } catch (error) {
                console.log(error)
            }
        }
        response()
    }, [orders])
    return (
        <Container>
            <HeaderAdm />
            <div className="table">
                <h1>Pedidos</h1>
                <table>
                    <thead>






                        <Column className="status">Status</Column>
                        <Column className="code">Código</Column>
                        <Column className="detailing">Detalhamento</Column>
                        <Column className="updated_at">Data e hora</Column>
                    </thead>
                    <tbody>
                        {
                            orders.map((order: any) => (
                                <TableAdm status={order?.status} code={order?.code} detailing={order?.detailing} id={order?.id} updated_at={order?.updated_at} user_id={order?.user_id} />
                            ))
                        }

                    </tbody>
                </table>
            </div>

            <Footer/>
        </Container >
    )
}

import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TableAdm } from "../../components/TableAdm";
import { Container } from "./styles";
import { api } from "../../services/api";
import { Column } from "../../components/TableAdm/styles";
import { Table } from "../../components/Table";
import { Footer } from "../../components/Footer";

export function OrdersUsers() {
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
        <Container>
            <Header />
            <div className="table">
            <h1>Pedidos</h1>
            <Table />
            </div>
            <Footer/>
        </Container >
    )
}



import { Route, Routes } from "react-router-dom";

import { HomeAdm } from "../pages/HomeAdm";
import { DetailAdm } from "../pages/DetailAdm";
import { AddDish } from "../pages/AddDish";
import { ToEditDish } from "../pages/ToEditDish";
import { OrderHistory } from "../pages/OrderHistory";

export function AdmRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeAdm />}></Route>
            <Route path="/detailadm/:id" element={<DetailAdm />}></Route>
            <Route path="/adddish" element={<AddDish />}></Route>
            <Route path="/toeditdish/:id" element={<ToEditDish />}></Route>
            <Route path="/orderhistory" element={<OrderHistory />}></Route>
        </Routes>
    )
}
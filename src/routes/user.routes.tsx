import { Route, Routes } from "react-router-dom";


import { Detail } from "../pages/Detail";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Requests } from "../pages/Requests";
import { OrdersUsers } from "../pages/OrdersUsers";

export function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/ordersusers" element={<OrdersUsers />}></Route>

        </Routes>
    )
}
import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNavBar } from "../components/nav/CustomerNavBar"

export const CustomerViews = () => {
    return <Routes>
        <Route 
        path="/" 
        element={
            <>
                <CustomerNavBar />
                <Outlet />
            </>
        }>
        <Route index element={<Welcome />}/> 
        </Route>
    </Routes>
}
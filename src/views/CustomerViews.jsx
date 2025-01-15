import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNavBar } from "../components/nav/CustomerNavBar"
import { TicketList } from "../components/tickets/TicketList"

export const CustomerViews = ({ currentUser }) => {
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
        <Route path="tickets" element={<TicketList currentUser={currentUser}/>}/>
        </Route>
    </Routes>
}
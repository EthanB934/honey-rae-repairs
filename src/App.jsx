import { TicketList } from "./components/tickets/TicketList"
import { CustomerList } from "./components/customers/customersList"
import { EmployeeList } from "./components/employees/employeeList"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"


export const App = () => {
  return <Routes>
    <Route 
      path="/" 
      element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
    > 
      <Route path="tickets" element={<TicketList />} />
      <Route path="customers" element={<CustomerList />} />
      <Route path="employees" element={<EmployeeList />} />
    </Route> 
  </Routes>
}

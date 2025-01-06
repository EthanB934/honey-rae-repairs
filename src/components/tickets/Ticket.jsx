import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeServices"


export const Ticket = ({ ticket }) => {
  const [allEmployees, setAllEmployees] = useState([])
  const [assignedEmployee, setAssignedEmployee] = useState({})

  useEffect(() => {
    getAllEmployees()
    .then(employeesArray => 
      setAllEmployees(employeesArray))
  }, [])

  useEffect(() => {
    if(allEmployees.length != 0) {
      //{console.log("allEmployees set!", allEmployees)}
      const foundEmployee = allEmployees.find((employee) => employee.id === ticket.employeeTickets[0]?.employeeId)
      console.log("Found employee: ", foundEmployee)
      setAssignedEmployee(foundEmployee)
    }
  }, [allEmployees, ticket])

    return (    
      <section className="ticket">
                <header className="ticket-info">#{ticket.id}</header>
                <div>{ticket.description}</div>
                <footer>
                  <div>
                    <div className="ticket-info">Assignee</div>
                    <div>{assignedEmployee ? assignedEmployee.user?.fullName : "No employee assigned"}</div>
                  </div>
                  <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "Yes" : "No"}</div>
                  </div>
                </footer>
              </section>
    ) 
}
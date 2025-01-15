import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeServices"
import { assignTicket, deleteTicket, updateTicket } from "../../services/ticketServices"


export const Ticket = ({ ticket, currentUser, resetAllEmployeeTickets, resetAllCustomerTickets }) => {
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

  const handleClaim = () => {
    debugger
    const currentEmployee = allEmployees.find((employee) => employee.userId === currentUser.id)

    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id
    }

    assignTicket(newEmployeeTicket).then(() => {
      resetAllEmployeeTickets()
      console.log("New employee ticket created!")
    })
  }

  const handleClose = () => {
    const closedTicket = {
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date()
    }
    debugger  
    updateTicket(closedTicket).then(() => {
      resetAllEmployeeTickets()
    })
  }

  const handleDelete = (ticketObj) => {
    //console.log("Button clicked!")
    //console.log(ticketObj)
    deleteTicket(ticketObj).then(resetAllCustomerTickets)
    console.log("Ticket Deleted!")
  }

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
                  <div className="btn-container">
                    {/* If the logged in user is an employee and there's no employee ticket associated with the service ticket,
                    then a button to claim the ticket should display */}
                    {currentUser.isStaff && !assignedEmployee ? 
                    <button className="btn btn-secondary" onClick={handleClaim}>Claim</button>
                    : (
                      ""
                    )}
                    {assignedEmployee?.userId === currentUser.id && !ticket.dateCompleted ? 
                    <button className="btn btn-warning" onClick={handleClose}>Close</button> 
                    : (
                      ""
                    )}
                    {/* If the logged in user is the assigned employee for the ticket and there is no dateCompleted,
                    then a button to close the ticket should be displayed*/}
                    {!currentUser.isStaff && (!assignedEmployee || ticket.dateCompleted)
                      ? <button className="btn btn-warning" onClick={() => {handleDelete(ticket)}}>Delete</button>
                      : (
                        ""
                      )}

                    {/* If the logged in user is a customer, and if a ticket related to current user is not assigned,
                    to an employee. Display a button to delete the open ticket */}
                  </div>
                </footer>
              </section>
    ) 
}
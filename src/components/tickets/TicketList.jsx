import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"
import { Filter } from "../filter/FilterBar.jsx"

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  
  const getAndSetAllTickets = () => {
    getAllTickets().then(ticketsArray => {
      if(currentUser.isStaff) {
        setAllTickets(ticketsArray)
      }
      else {
        const customerTickets = ticketsArray.filter((ticket) => ticket.userId === currentUser.id)
        setAllTickets(customerTickets)
      }
    })
  }

    useEffect(() => {
      getAndSetAllTickets()
    }, [currentUser])
  
    useEffect(() => {
      if(showEmergencyOnly) {
        const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
      }
      else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])
  
    useEffect(() => {
        const searchTickets = allTickets.filter((ticket) => 
            ticket.description.toLowerCase().includes(searchTerms.toLowerCase()))
        setFilteredTickets(searchTickets)
    }, [searchTerms, allTickets])

    return (
      <>
        <div className="tickets-container"></div>
        <h2>Tickets</h2>
        <article className="tickets">
          <Filter setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerms={setSearchTerms}/>
          {filteredTickets.map(ticketObj => {
            return (
              // In the ticket component function call, there are two attributes, ticket and key. 
              // Ticket is set equal to the current iterating object being mapped from filteredTickets. It is being passed
              // as an argument to the Ticket component function. 
              // Key is not being passed as an argument to the Ticket component function. Instead, it is simply assigning
              // a unique id to the individual ticket components. It evaluates to the integer assigned to the ticket object
              // id property. 
              <Ticket resetAllTickets={getAndSetAllTickets} ticket={ticketObj} currentUser={currentUser} key={ticketObj.id}/>
          )
          })}
        </article>
      </>
    ) 
}
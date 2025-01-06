import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
  
    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
        console.log("tickets set")
      })
    }, [])
  
    useEffect(() => {
      if(showEmergencyOnly) {
        const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
      }
      else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])
  
    return (
      <>
        <div className="tickets-container"></div>
        <h2>Tickets</h2>
        <article className="tickets">
          <div>
            <button className="filter-btn btn-primary" onClick={() => {setShowEmergencyOnly(true)}}>Emergency!</button>
            <button className="filter-btn btn-secondary" onClick={() => {setShowEmergencyOnly(false)}}>Show All</button>
          </div>
          {filteredTickets.map(ticketObj => {
            return (
              <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id}/>
          )
          })}
        </article>
      </>
    ) 
}
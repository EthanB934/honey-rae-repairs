import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices.js"
import "./Ticket.css"
import { Ticket } from "./Ticket.jsx"
import { Filter } from "../filter/FilterBar.jsx"

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  
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
              <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id}/>
          )
          })}
        </article>
      </>
    ) 
}
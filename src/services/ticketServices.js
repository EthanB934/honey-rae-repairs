export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets").then((res) => res.json())
}

export const assignTicket = (employeeTicket) => {
    return fetch("http://localhost:8088/employeeTickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeTicket)
    })
} 

export const updateTicket = (updatedTicket) => {
    return fetch(`http://localhost:8088/serviceTickets/${updatedTicket.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTicket)
    })
}
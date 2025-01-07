import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userServices"
import { Customer } from "./customer"
import "./customers.css"

export const CustomerList = () => {
    const [nonStaffUsers, setNonStaffUsers] = useState([])

    useEffect(() => {
        getNonStaffUsers()
        .then((nonStaffUsers) => {
            setNonStaffUsers(nonStaffUsers)
        })
    }, [])

    return <>
    <section className="customers">
        <div>
            {nonStaffUsers.map((nonStaffUser) => {
                return <Customer customer={nonStaffUser} key={nonStaffUser.id}/>
            })}
        </div>
    </section>
    </>
}
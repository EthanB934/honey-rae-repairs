import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/customerServices"
import { Customer } from "../../Users/userServices"
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
   <section>
        <div className="customers">
            {nonStaffUsers.map((nonStaffUser) => {
                return <Customer customer={nonStaffUser} key={nonStaffUser.id}/>
            })}
        </div>
    </section>
    </>
}
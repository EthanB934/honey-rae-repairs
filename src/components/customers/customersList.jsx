import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/customerServices"
import { User } from "../../Users/userServices"
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
                return <User customer={nonStaffUser} key={nonStaffUser.id}/>
            })}
        </div>
    </section>
    </>
}
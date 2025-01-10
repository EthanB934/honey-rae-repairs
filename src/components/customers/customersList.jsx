import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/customerServices"
import { Customer } from "../../Users/userServices"
import "./customers.css"
import { Link } from "react-router-dom"

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
                return (
                <div key={nonStaffUser.id}>
                    <Link to={`/customers/${nonStaffUser.id}`}>
                        <Customer customer={nonStaffUser}/>
                    </Link>
                </div>
                )
            })}
        </div>
    </section>
    </>
}
import { useState, useEffect } from "react"
import { User } from "./users.jsx"
import { getUsers } from "./userServices.js"
import "./users.css"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        .then((users) => {
            setUsers(users)
            {"users set: ", users}
        })
    }, [])

    return <>
    <section className="users">
        <div>
            {users.map((user) => {
                return <User user={user} key={user.id}/>
            })}
        </div>
    </section>
    </>
}
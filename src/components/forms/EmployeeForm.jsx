import { useEffect, useState } from "react"
import "./Forms.css"
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeServices"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ({ currentUser }) => {
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        console.log(currentUser)
        getEmployeeByUserId(currentUser.id)
        .then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [currentUser])

    const handleSave =(event) => {
        event.preventDefault()
        console.log("Clicked!")

        const editedEmployee = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            userId: employee.userId
        }

        updateEmployee(editedEmployee).then(() => {
            navigate(`/employees/${employee.id}`)
        })
    }

    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty:</label>
                    <input
                     type="text"
                     required
                     value={employee?.specialty}
                     onChange={(event) => {
                        const copy = {...employee}
                        copy.specialty = event.target.value
                        setEmployee(copy)
                     }}
                     className="form-control"  
                    />
                </div> 
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate:</label>
                    <input
                     type="number"
                     required
                     value={employee?.rate}
                     onChange={(event) => {
                        const copy = {...employee}
                        copy.rate = event.target.value
                        setEmployee(copy)
                     }}
                     className="form-control"  
                    />
                </div> 
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
                </div> 
            </fieldset>
        </form>
    )
}
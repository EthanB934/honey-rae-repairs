import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByEmployeeId } from "../../services/employeeServices"
import "./employees.css"

export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeByEmployeeId(employeeId).then((data) => {
            const employeeObj = data
            debugger
            setEmployee(employeeObj)
        })
    }, [employeeId])
    
    return <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email: {employee.user?.email}</span>
        </div>
        <div>
            <span className="employee-info">Specialty: {employee.specialty}</span>
        </div>
        <div>
            <span className="customer-info">Rate: {employee.rate}</span>
        </div>
    </section>
}
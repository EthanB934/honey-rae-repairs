import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeServices"
import { Employee } from "../../Users/userServices"
import "./employees.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [allEmployees, setAllEmployees] = useState([])

    useEffect(() => {
        getAllEmployees()
        .then((employeesArray) => {
            setAllEmployees(employeesArray)
        })
    }, []) 

    return <>
        <section>
            <div className="employees">
                {allEmployees.map((employee) => {
                    return (
                    <div key={employee.id}>
                        <Link to={`/employees/${employee.id}`}>
                            <Employee employee={employee}/>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </section>
    </>
}

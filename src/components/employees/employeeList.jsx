import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeServices"
import { Employee } from "../../Users/userServices"
import "./employees.css"

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
                    return <Employee employee={employee} key={employee.id} />
                })}
            </div>
        </section>
    </>
}

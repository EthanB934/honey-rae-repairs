/*
    This module is for receiving similar data between users who are staff and who are not. This module is not receiving
    unique data to customer objects nor employee objects. Those objects have their own unique data. This module should be 
    seen as data common to all users. 
*/
import "./users.css"

export const User = ( {user} ) => {
    return <div className="user">
        {console.log("User: ", user)}
        <div className="user-info">Name</div>
            <header>{user.fullName}</header>
        <div className="user-info">E-mail</div>
            <footer>{user.email}</footer>
    </div>
}

export const Customer = ( {customer} ) => {
    return <div className="user">
        {console.log("Customer: ", customer)}
        <div className="user-info">Name</div>
            <header>{customer.fullName}</header>
        <div className="user-info">E-mail</div>
            <footer>{customer.email}</footer>
    </div>
}

export const Employee = ( {employee} ) => {
    return <div className="user">
        {console.log("Employee: ", employee)}
        <div className="user-info">Name</div>
            <header>{employee.fullName}</header>
        <div className="user-info">E-mail</div>
            <footer>{employee.email}</footer>
    </div>
}
/*
    This user component is a generic component for both users who are staff and who are not. Do not pass the parameter set
    in the .map as a prop to the function. Instead, pass in the attribute associated with that parameter. In the case of
    the User component function invocation in customersList module, we pass in the customer from the attribute
    "customer={nonStaffUser}." Passing in the parameter in the .map method returns undefined
*/
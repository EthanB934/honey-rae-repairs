import "./users.css"

export const User = ( {customer} ) => {
    return <div className="user">
        {console.log(customer)}
        <div className="user-info">Name</div>
            <header>{customer.fullName}</header>
        <div className="user-info">E-mail</div>
            <footer>{customer.email}</footer>
    </div>
}

/*
    This user component is a generic component for both users who are staff and who are not. Do not pass the parameter set
    in the .map as a prop to the function. Instead, pass in the attribute associated with that parameter. In the case of
    the User component function invocation in customersList module, we pass in the customer from the attribute
    "customer={nonStaffUser}." Passing in the parameter in the .map method returns undefined
*/
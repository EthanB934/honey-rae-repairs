export const Customer = ( {customer} ) => {
    return <div className="customers">
        <div>Name</div>
            <header>{customer.fullName}</header>
        <div>E-mail</div>
            <footer>{customer.email}</footer>
    </div>
}
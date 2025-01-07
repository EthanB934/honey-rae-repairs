export const User = ( {user} ) => {
    return <div className="user">
        {console.log(user)}
        <div className="user-info">Name</div>
            <header>{user.fullName}</header>
        <div className="user-info">E-mail</div>
            <footer>{user.email}</footer>
    </div>
}
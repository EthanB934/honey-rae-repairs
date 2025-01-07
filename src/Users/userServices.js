export const getUsers = () => {
    return fetch("http://localhost:8088/users?isStaff=true").then((res) => res.json())
}
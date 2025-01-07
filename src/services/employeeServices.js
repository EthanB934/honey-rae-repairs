export const getAllEmployees = () => {
    return fetch("http://localhost:8088/users?isStaff=true").then((response) => response.json())
}
export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then((response) => response.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees/${userId}?_expand=user`).then((res) => res.json())
}
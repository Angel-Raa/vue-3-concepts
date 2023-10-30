export interface Login {
    username:string,
    password:string
}

export interface Register {
    username:string,
    password:string,
    email:string
}

export interface Response {
    message:string,
    jwt:string,
    status:string
}
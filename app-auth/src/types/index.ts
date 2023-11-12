export interface Login {
  username: string
  password: string
}

export interface Register {
  username: string
  password: string
  email: string
}

export interface User {
  userId: number
  username?: string
  email?: string
}

export interface Response {
  status: boolean
  message: string
  jwt: string
}

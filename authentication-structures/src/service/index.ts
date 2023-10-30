import type { Login, Register, Response } from '@/types'
const URL_LOGIN = `http://localhost:9000/api/v1/authentication/login`
const URL_REGISTER_PROFILE = `http://localhost:9000/api/v1/authentication/sign-profile`
export const login = async (login: Login): Promise<Response> => {
  try {
    const response = await fetch(URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(login)
    })
    const data: Response = (await response.json()) as Response
    return data
  } catch (error) {
    throw new Error('not valid')
  }
}

export const registerProfile = async (register: Register): Promise<Response> => {
  try {
    const response = await fetch(URL_REGISTER_PROFILE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(register)
    })
    const data: Response = (await response.json()) as Response
    return data
  } catch (error) {
    throw new Error('not valid')
  }
}


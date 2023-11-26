import type { Post } from '@/types'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`)
    }

    const data = (await response.json()) as Post[]
    return data
  } catch (error) {
    console.error('Error al recuperar las publicaciones:', error)
    throw error // Rechazar la promesa para que el error pueda ser manejado por el llamador
  }
}

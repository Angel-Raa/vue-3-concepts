const URL = `https://jsonplaceholder.typicode.com/posts`
import { type Post } from '@/types'

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(URL)
    const data = (await response.json()) as Post[]
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts')
  }
}

export const getPostById = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`${URL}/${id}`)
    const data = (await response.json()) as Post
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts')
  }
}

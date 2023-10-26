// https://jsonplaceholder.typicode.com/posts
import { type Post } from '@/types'

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = (await response.json()) as Post[]
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getPostById = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = (await response.json()) as Post
    return data
  } catch (error) {
    console.log(error)
    return {} as Post
  }
}

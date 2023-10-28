/**
userId: The identifier of the user who created the post.

id: The unique identifier of the post.

title?: string: The title of the post. This property is optional.

body?: string: The body of the post. This property is optional.
 */
export interface Post  {
  userId: number
  id: number
  title?: string
  body?: string
}

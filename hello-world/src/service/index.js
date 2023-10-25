export const ULR = 'https://jsonplaceholder.typicode.com/posts'
const getProduct = async () => {
  const response = await fetch(ULR)
  const data = await response.json()
  return data
}

export default {
  getProduct
}

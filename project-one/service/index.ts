export const getNotes = async () => {
  const response = await fetch("http://localhost:3000/api/notes");
  const data = await response.json();
  return data;
};

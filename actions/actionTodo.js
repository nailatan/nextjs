'use server'

export async function getTodos()  {
    const res = await fetch('https://dummyjson.com/todos')
    const j = await res.json()
     return j;
}
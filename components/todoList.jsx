'use client'

import TodoElement  from './todoElement'
import { useState } from 'react'

const TodoList = ({list}) => {
    const [what, setWhat] = useState("")

    const clickTodo = (todo) => {
        //CAll api to update
        todo.completed = !todo.completed
        setList( (todoList) => todoList.map((t) => (t.id === todo.id ? todo : t)));
    }

    const deleteTodo = async (todo) => {
        //CALL api to delete
        setList((todoList) => todoList.filter((t) => t.id !== todo.id));
      };
    const addTodo = (e) => {
        e.preventDefault();
        const added = {
            todo: what,
            id : lista.length +1,
            completed: false
        }
        setList((todoList) => [...todoList, added]);
    }
    
    const  [lista, setList] = useState(list)

return (
    <div>
        <div className="todo-list">
        <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Do the laundry..."
          value={what}
          onChange={(e) => setWhat(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
      </form>
        {lista.map((todo) =><TodoElement todo = {todo} onClick={clickTodo} onDelete={deleteTodo}></TodoElement> )}
        </div>
    </div>)
}

export default TodoList
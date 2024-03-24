import { getTodos} from '../../actions/actionTodo'
import TodoList from '../../components/todoList'

const getData = async () => {
    const lista = await getTodos();
    return lista.todos
}

const Todo = async() =>  {
    const list= await getData()
    // console.log(list)
return (
    <div>
        <div className="flex min-h-screen flex-col items-left justify-start border-solid border-2">
            <div className='p-2 pb-4 text-center'>TODO LIST</div>        
            <TodoList list ={list}></TodoList>
        </div>
    </div>)
}

export default Todo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle, faCircleCheck} from "@fortawesome/free-regular-svg-icons"

const TodoElement = ({todo, onClick, onDelete}) => {
  return (
<div className="todo" key={todo.id} onClick={()=>onClick(todo)}>
    <input type="checkbox" checked={todo.completed} />
    <div className={"what " + (todo.completed ? "done" : "")}>{todo.todo}</div>
    <div className="space" />
    <div className="delete" onClick={ () => onDelete(todo)}>&times;</div>
</div>
  );
};

export default TodoElement;

import React,  { useContext } from "react"
import { TodoContext } from "../../context/TodoContext_p"

const ListItem = ({ item }) => {

    const {handleTodoDelete, handleTodoToggle} = useContext(TodoContext)

    return (
        <div className='list-item'>
        <li>
            <input type='checkbox' checked = {item.completed} onChange={()=>{handleTodoToggle(item.num)}}/>
            <label style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                <span className='todo-text'>{item.text}</span>
            </label>

            <button onClick={()=>{handleTodoDelete(item.num)}}>DELETE</button>
        </li>
    </div>
    )
}

export default ListItem
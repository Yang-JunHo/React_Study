import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext_p"

const AddItem = () => {

  const {newTodo, handleNewTodoAddtion, setNewTodo} = useContext(TodoContext)

    return (
      <div>
        <input type='text' value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={handleNewTodoAddtion}>Add</button>
      </div>
    )
  }
  
  export default AddItem
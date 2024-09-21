import ListItem from './ListItem_p'
import AddItem from './AddItem_p'
import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext_p'

const List = () => {

  const { todos } = useContext(TodoContext)

  return (
    <div className='list-container'>
      <ul>
        {todos.map(item => <ListItem key={item.num} item={item}></ListItem>)}
      </ul>
      <AddItem />
    </div>
  )
}

export default List
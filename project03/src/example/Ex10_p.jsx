import React, { useState } from 'react'
import '../css/ex10.css'
import List from '../components/Ex10_p/List_p'
import { TodoContext } from '../context/TodoContext_p'

const Ex10 = () => {

    // 할일들 목록 배열 
    const [todos, setTodos] = useState([])

    // 새로운 할일 텍스트 
    const [newTodo, setNewTodo] = useState("")

    /** todos 배열에 새로운 할일 객체를 추가해주는 함수 */
    const handleNewTodoAddtion = () => {
        setTodos([...todos,
            {
                text: newTodo,
                completed: false,
                num: todos.length > 0 ? todos[todos.length - 1].num + 1 : 1
            }])
    
            setNewTodo("")
    }

    /** 사용자가 선택한 todo 데이터를 배열에서 삭제하는 함수 */
    const handleTodoDelete = (num) => {
        let filteredTodo = todos.filter(item => item.num != num)
        setTodos(filteredTodo)
    }

    /** 사용자가 선택한 todo 데이터를 완료했을 때 체크&밑줄 */
    const handleTodoToggle = (num) => {
        let targetTodo = todos.find(item => item.num == num);
        if (targetTodo) {
            targetTodo.completed = !targetTodo.completed;
            setTodos([...todos]);
        }
    }


    return (
        <TodoContext.Provider value={{todos, setTodos, newTodo, setNewTodo, handleNewTodoAddtion, handleTodoDelete, handleTodoToggle}}>
        <div className='todo-container'>
            <h1>Todo List</h1>
            <List />
        </div>
        </TodoContext.Provider>
    )
}

export default Ex10
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos})=> {
  return (
    <div className='list'>
      <ul>
        {todos.map(({id, title, completed}) => <TodoItem key={id} id={id} title={title} completed={completed}/>)}
      </ul>
    </div>
  )
}

export default TodoList
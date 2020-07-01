import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <div className='list'>
      <ul>
        {todos.map(({id, title, completed}) => <TodoItem id={id} title={title} completed={completed}/>)}
      </ul>
    </div>
  )
}
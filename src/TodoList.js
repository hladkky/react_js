import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <div className='List'>
      <ul>
        {todos.map(item => <TodoItem key={item.id} {...item} />)}
      </ul>
    </div>
  )
}
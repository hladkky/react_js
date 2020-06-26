import React, { useState } from 'react'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: false}
  ]);

  return (
    <div className="container">
      <h1>TODO List</h1>

        <div className="input-field">
          <input type="text" placeholder="New TODO..."/>
        </div>

        <TodoList todos={todos} />
    </div>
  );
}
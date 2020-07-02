import React, { useState, useEffect, useReducer, useCallback } from 'react'
import TodoList from './TodoList'
import { Context } from './context'
import reducer from './reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer,
    JSON.parse(localStorage.getItem('todos') || []))
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(state))
    } catch(e) {
      console.error(e)
    }
  }, [state])

  const addTodo = useCallback ((event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      dispatch({
        type: 'ADD',
        payload: todoTitle
      })

      setTodoTitle('');
    }
  }, [todoTitle])

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container">
        <h1>TODO List</h1>

          <div className="input-field">
            <input
              type="text"
              placeholder="New TODO..."
              value = {todoTitle}
              onChange = {event => setTodoTitle(event.target.value)}
              onKeyPress = {addTodo}
            />
            <i
              onClick = {addTodo}
              className="material-icons">
              add
            </i>
          </div>

          <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
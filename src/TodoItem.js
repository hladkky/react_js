import React, { useContext, useState, useEffect } from 'react'
import { Context } from './context'

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context);

  const [cls, setCls] = useState(['todo']);

  useEffect(() => {
      console.log(cls, completed)
      if (completed) {
        setCls([...cls, 'completed']);
      }
      else {
        setCls([cls[0]])
      }
  }, [completed])

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          id="checkmark"
          className="checkmark"
          onChange={() => dispatch({
            type: 'TOGGLE',
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons"
          onClick={() => dispatch({
            type: 'REMOVE',
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}
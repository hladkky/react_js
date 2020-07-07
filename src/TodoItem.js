import React, { useContext, useState, useEffect, useCallback, useRef } from 'react'
import { Context } from './context'

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context);

  const [cls, setCls] = useState(['todo']);
  const [click, setClick] = useState(true);

  const inputEl = useRef(null);

  const changeMode = useCallback(()=>{
    setClick(!click);
  })

  useEffect(() => {
    if (completed) {
      setCls([...cls, 'completed']);
    }
    else {
      setCls([cls[0]])
    }
  }, [completed])

  useEffect(() => {
    if (!click) {
      inputEl.current.focus();
      inputEl.current.select()
    }
  }, [click])

  return (
    <li className={cls.join(' ')}>
      <div className='label'>
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
        <div className="spaninput">
          {
            click ?
              <span onClick={changeMode}>
                {title}
              </span>
            :
              <input value={title}
                     ref={inputEl}
                     onBlur={changeMode}
                     onChange = {event => dispatch({
                      type: 'EDIT',
                      payload: {id: id, val: event.target.value}})}
                     onKeyPress = {event => {
                       if (event.key === 'Enter') {
                         inputEl.current.blur();
                       }
                     }}
              ></input>
          }
        </div>

        <i
          className="material-icons"
          onClick={() => dispatch({
            type: 'REMOVE',
            payload: id
          })}
        >
          delete
        </i>
      </div>
    </li>
  )
}
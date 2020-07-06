import { ADD, TOGGLE, REMOVE, EDIT } from './constants'

export default function(state, action) {
    switch(action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case TOGGLE:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case REMOVE:
            return state.filter(todo => todo.id !== action.payload)
        case EDIT:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.val
                }
                return todo
            })
        default:
            return state
    }
}
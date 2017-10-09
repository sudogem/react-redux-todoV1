import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/actionTypes'
import cuid from 'cuid'

export default function todoReducer(state=[], action) {
  console.log('[reducers/todo]:',action.type)
  switch(action.type) {
    case ADD_TODO: {
      const { id = cuid(), text } = action
      return [
        ...state,
        {id, text}
      ]
    }

    case DELETE_TODO: {
      const { id } = action
      return state.filter(todo =>
        (todo.id === id)
          ? { ...todo }
          : todo
      )

      // state.map(todo => {
      //   if (todo.id === id) {
      //     console.log('[reducers/todo] found!!! ',id)
      //     result = [...todo, completed: !todo.completed]
      //   }
      // })
      // return result
    }

    case TOGGLE_TODO: {
      const { id } = action
      return state.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )

      // state.map(todo => {
      //   if (todo.id === id) {
      //     console.log('[reducers/todo] found!!! ',id)
      //     result = [...todo, completed: !todo.completed]
      //   }
      // })
      // return result
    }

    default:
      return state
  }
}
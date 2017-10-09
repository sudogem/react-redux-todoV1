import * as TodoTypes from './actionTypes'
import cuid from 'cuid'

// action creators
export const addTodo = (todo) => {
  const { id = cuid(), text } = todo
  console.log('[actions/todo] addTodo():',todo);

  return {
    type: TodoTypes.ADD_TODO,
    id,
    text
  }
}

export const deleteTodo = (id) => {
  console.log('[actions/todo] deleteTodo:', id);

  return {
    type: TodoTypes.DELETE_TODO,
    id
  }
}

export const toggleTodo = (id) => {
  console.log('[actions/todo] toggleTodo:', id);

  return {
    type: TodoTypes.TOGGLE_TODO,
    id
  }
}
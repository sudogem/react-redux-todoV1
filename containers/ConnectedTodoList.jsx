import { connect } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../actions/todo'
import TodoList from '../TodoList.jsx'

import { bindActionCreators } from 'redux'

const mapStateToProps = (state, props) => {
  const allTodos = state.items
  return {
    items: allTodos,
    hello: 'hello world'
  }
}

// long version
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     onAddTodo: (todo) => dispatch(addTodo(todo)),
//     onDeleteTodo: (id) => dispatch(deleteTodo(id))
//   }
// }

// short version
const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({ addTodo, deleteTodo, toggleTodo }, dispatch)
}

const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default ConnectedTodoList

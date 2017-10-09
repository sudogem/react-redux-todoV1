import React from 'react';

import Todo from './Todo.jsx';

import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'


const styleList = {
  border: "0px solid red",
  listStylePosition: "inside",
  padding: "0"
}

const styleListItem = {
  float: "right"
}

const clearBoth = {
  clear: "both"
}

const TodoList = (props) => {
  console.log('TodoList:', props)
  const items = props.items
  console.log('TodoList items:', items)
  // const onAddTodo = p.onAddTodo //it works
  const addTodo = props.addTodo
  // const deleteTodo = props.deleteTodo
  // const toggleTodo = p.toggleTodo
  return (
    <div>
      <Todo addTodo={addTodo} />
      <div style={clearBoth}></div>
      <ul style={styleList} >
        {items.map((p, i) =>
          <li onClick={(e) => { e.preventDefault(); props.toggleTodo(p.id.toString()) } } key={p.id.toString()} style={{
            textDecoration: p.completed ? 'line-through' : 'none'
          }} >{p.text}<a href="javascript:void(0)" style={styleListItem} onClick={(e) => { e.preventDefault(); props.deleteTodo(p.id.toString()) } } >{ p.completed ? 'Completed' : 'Active'}</a></li>
        )}
      </ul>
    </div>
  )
}

export default TodoList
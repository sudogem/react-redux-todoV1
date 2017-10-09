import React, { Component } from 'react';
import { addTodo } from './actions/todo'
import { bindActionCreators } from 'redux'
import { Input, Button, Form } from 'semantic-ui-react'

const Todo = ({ addTodo }  ) => {
  console.log('xx:', addTodo);
  let input
  return (
    <div style={{'border': '0px solid red'}} >
      <Form onSubmit={e => {
        e.preventDefault()
        const input = document.querySelector('input[name=todo]')
        if (!input.value.trim()) {
          return
        }
        const val = input.value
        input.value = ''
        // dispatch(addTodo(val)) // error: dispatch is not a function
        addTodo({'text': val})
      }}>
        {/**<Input type='text' ref={ node => {input = node}}  />**/}
        <Form.Field>
          <label>Todo</label>
          <Input className="TodoText" placeholder='Task...' name='todo' style={{'width':'86%'}} /><Button>Add</Button>
        </Form.Field>
      </Form>
    </div>
  )
}

export default Todo
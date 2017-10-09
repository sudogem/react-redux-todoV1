import React from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import App from './App.jsx'

import { createStore } from 'redux'
import appReducer from './reducers/index'

import { addTodo } from './actions/todo'

// import 'semantic-ui-css/semantic.min.css'
import './semantic/dist/semantic.min.css';

let store = createStore(appReducer)
store.dispatch(addTodo({
  text: 'rally'
}))
store.dispatch(addTodo({
  text: 'martial-law'
}))

console.clear();
console.log('initial state:', store.getState())
store.subscribe(() =>
  console.log('state changed:', store.getState())
)


render(<App store={store} />, document.getElementById('root'));

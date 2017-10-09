import { combineReducers } from 'redux'

import todoReducer from './todo'

const appReducer = combineReducers({
  items: todoReducer
})

export default appReducer
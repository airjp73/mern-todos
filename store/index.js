import { combineReducers, createStore } from 'redux'

import todos from './todos/reducers'

const reducers  = combineReducers({todos})

export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState)
}

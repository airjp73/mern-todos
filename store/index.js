import { combineReducers, createStore } from 'redux'

import user from './user/reducers'

const reducers  = combineReducers({user})

var defaultState = {
  user: {
    todos: []
  }
}

export const initStore = (initialState = defaultState) => {
  return createStore(reducers, initialState)
}

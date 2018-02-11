import { combineReducers, createStore } from 'redux'

import user from './user/reducers'

const reducers  = combineReducers({user})

export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState)
}

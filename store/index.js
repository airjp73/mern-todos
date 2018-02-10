import { combineReducers, createStore } from 'redux'

import todos from './todos/reducers'

const reducers  = combineReducers({todos})
const store     = createStore(reducers)

export default store

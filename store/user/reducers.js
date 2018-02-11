import {LOGIN, LOGOUT, ADD_TODO, REMOVE_TODO} from './actions'

function user(state = false, action) {
  ////If state is false, the only action that can happen is LOGIN
  ////Checking now prevents needing to check for every other action
  if (!state) {
    if (action.type === LOGIN) {
      return Object.assign({}, action.user)
    }

    return state
  }

  switch(action.type) {
    case LOGOUT:
      return false

    case ADD_TODO:
      let newState = Object.assign({}, state)
      newState.todos.push({text: action.text})
      return newState

    case REMOVE_TODO:
      let index = state.todos.findIndex((todo) => {
        return todo.text === action.text
      })
      if (index != -1) {
        let newState = Object.assign({}, state)
        newState.todos.splice(index, 1)
        return newState
      }
      return state

    default:
      return state
  }
}

export default user

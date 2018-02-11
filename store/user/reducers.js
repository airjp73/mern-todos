import {LOGIN, LOGOUT, ADD_TODO, REMOVE_TODO} from './actions'

function user(state = false, action) {
  ////If state is false, the only action that can happen is LOGIN
  if (!state) {
    if (action.type === LOGIN)
      return action.user
    return state
  }

  switch(action.type) {
    //case LOGIN:
    //  return action.user
    case LOGOUT:
      return false

    case ADD_TODO:
      newState = state.slice()
      newState.todos.push({text: action.text})

      return newState
      /*[
        ...state,
        {text: action.text}
      ]*/

    case REMOVE_TODO:
      let index = state.todos.findIndex((todo) => {
        return todo.text === action.text
      })
      if (index != -1) {
        let newState = state.slice()
        newState.todos.splice(index, 1)
        return newState
      }
      return state

    default:
      return state
  }
}

export default user

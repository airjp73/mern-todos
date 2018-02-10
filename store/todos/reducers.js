import {ADD_TODO, REMOVE_TODO} from './actions'

function todos(state = [], action) {
  switch(action.type) {

    case ADD_TODO:
      return [
        ...state,
        {text: actions.text}
      ]

    case REMOVE_TODO:
      let index = state.indexOf(action.text)
      if (index != -1) {
        let newState = state.slice()
        newState.splice(index, 1)
        return newState
      }
      return state

    default:
      return state
  }
}

export default todos

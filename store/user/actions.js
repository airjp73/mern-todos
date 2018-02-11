export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = "REMOVE_TODO"

export function login(user) {
  return {type: LOGIN, user}
}

export function logout() {
  return {type: LOGOUT}
}

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function removeTodo(text) {
  return {type: REMOVE_TODO, text}
}

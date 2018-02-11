import Layout from '../components/Layout.jsx'
import TodoEntry from '../components/TodoEntry.jsx'
import TodoList from '../components/TodoList.jsx'

import {addTodo, removeTodo} from '../store/todos/actions'
import {initStore} from '../store'

import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

const template = ({todos, onAddClick, onRemoveClick}) => (
  <Layout>
    <TodoEntry onAddClick={onAddClick} />
    <TodoList onRemoveClick={onRemoveClick} todos={todos} />
  </Layout>
)

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick: (text) => {
      dispatch(removeTodo(text))
    },
    onAddClick: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const Index = withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(template)

export default Index

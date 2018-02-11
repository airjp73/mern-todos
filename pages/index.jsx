import Layout from '../components/Layout.jsx'
import TodoEntry from '../components/TodoEntry.jsx'
import TodoList from '../components/TodoList.jsx'

import {addTodo, removeTodo} from '../store/user/actions'
import {initStore} from '../store'

import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

const Index = ({user, onAddClick, onRemoveClick}) => {
  if (!user) {
    return (<h1>User not logged in!</h1>)
  }

  return (
    <Layout>
      <TodoEntry onAddClick={onAddClick} />
      <TodoList onRemoveClick={onRemoveClick} todos={user.todos} />
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {user: state.user}
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

const wrappedIndex = withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(Index)

export default wrappedIndex

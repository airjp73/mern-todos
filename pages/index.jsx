import Layout from '../components/Layout.jsx'
import TodoEntry from '../components/TodoEntry.jsx'
import TodoList from '../components/TodoList.jsx'

import {login, addTodo, removeTodo} from '../store/user/actions'
import {initStore} from '../store'

import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import axios from 'axios'

const Index = ({user, onAddClick, onRemoveClick, userAgent}) => {
  if (!user) {
    return (<h1>User not logged in!</h1>)
  }

  return (
    <Layout userAgent='userAgent'>
      <TodoEntry onAddClick={onAddClick} />
      <TodoList onRemoveClick={onRemoveClick} todos={user.todos} />
    </Layout>
  )
}

////For testing purposes only
//Log in a test user to make sure everything is hooked up right
Index.getInitialProps = async ({store, req}) => {
  if (req.isAuthenticated())
    store.dispatch(login(req.user.toObject()))

  return {userAgent: req.headers['user-agent']}
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

import PropTypes from 'prop-types'
import TodoItem from './TodoItem.jsx'

const TodoList = ({todos, onRemoveClick}) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} onRemoveClick={onRemoveClick} />
    ))}
  </ul>
)

TodoList.propTypes = {
  onRemoveClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList

import PropTypes from 'prop-types'

const TodoItem = ({onRemoveClick, todo}) => (
  <div>
    <p>{todo.text}</p>
    <button onClick={() => onRemoveClick(todo.text)}>X</button>
  </div>
)

TodoItem.propTypes = {
  onRemoveClick: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
}

export default TodoItem

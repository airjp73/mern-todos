import PropTypes from 'prop-types'
import React from 'react'
class TodoEntry extends React.Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }
    /*this.propTypes = {
      onAddClick: PropTypes.func.isRequired
    }*/

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  //Handlers
  onChange(e) {
    this.setState({value: e.target.value})
  }

  onSubmit(e) {
    this.props.onAddClick(this.state.value)
    this.setState({value: ""})
  }

  //Render
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Enter</button>
      </div>
    )
  }
}

export default TodoEntry

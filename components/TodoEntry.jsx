import PropTypes from 'prop-types'
import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class TodoEntry extends React.Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onKeyUp  = this.onKeyUp .bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  //Handlers
  onChange(e) {
    this.setState({value: e.target.value})
  }

  onKeyUp(e) {
    if (e.key === 'Enter')
      this.onSubmit(e)
  }

  onSubmit(e) {
    this.props.onAddClick(this.state.value)
    this.setState({value: ""})
  }

  //Render
  render() {
    return (
      <div>
        <TextField hintText="Enter Todo" value={this.state.value} onChange={this.onChange} onKeyUp={this.onKeyUp} />
        <FlatButton label='Enter' onClick={this.onSubmit} />
      </div>
    )
  }
}

export default TodoEntry

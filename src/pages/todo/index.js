import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { add, reduce } from '@/action/todo/index'

@connect(({todo}) => ({
  count: todo.count
}))
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  add = () => {
    const { dispatch, count } = this.props
    dispatch(add({
      count: count + 2
    }))
  }
  reduce = () => {
    const { dispatch, count } = this.props
    dispatch(reduce({
      count: count -2
    }))
  }
  render() {
    const { count } = this.props
    return(
      <div>
        <div>{count}</div>
        <div onClick={this.add}>+</div>
        <div onClick={this.reduce}>-</div>
      </div>
    )
  }
}

export default Todo
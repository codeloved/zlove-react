import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { add, reduce, getTodos } from '@/action/todo/index'

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
  getTodos = () => {
    const { dispatch } = this.props
    dispatch(getTodos({
      id: 1
    }))
  }
  render() {
    const { count } = this.props
    return(
      <div>
        <div>{count}</div>
        <div onClick={this.add}>+</div>
        <div onClick={this.reduce}>-</div>
        <br/>
        <div onClick={this.getTodos}>获取todo</div>

      </div>
    )
  }
}

export default Todo
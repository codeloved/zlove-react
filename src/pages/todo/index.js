import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { add, reduce, getTodosRequest } from '@/action/todo/index'

@connect(({todo}) => ({
  count: todo.count,
  todoData: todo.todoData
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
    dispatch(getTodosRequest({
      id: 1
    }))
  }
  renderTodos = () => {
    const { todoData } = this.props
    return todoData.map(item => (<li key={item.value}>{item.name}</li>))
  }
  render() {
    const { count } = this.props
    return(
      <div>
        <div>{count}</div>
        <div className='cursor' onClick={this.add}>+</div>
        <div className='cursor' onClick={this.reduce}>-</div>
        <br/>
        <div className='cursor' onClick={this.getTodos}>获取todo</div>
        <br/>
        <div>渲染todos</div>
        <ul>{this.renderTodos()}</ul>
      </div>
    )
  }
}

export default Todo
import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const  { from } = this.props.location.state || { from: { pathname: '/' }}
    return(
        <div>
          <div>用户名: </div>
          <div>密码: </div>
          <div>登录</div>
        </div>
    )
  }
}

export default Login
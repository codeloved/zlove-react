import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { location: { state } } = this.props;
    const { from } = state || { from: { pathname: '/' } };
    return (
      <div>
        <div>用户名: </div>
        <div>密码: </div>
        <div>登录</div>
      </div>
    );
  }
}

export default Login;

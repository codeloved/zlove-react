import React, { Component } from 'react'
import './baseLayout.css'

class BaseLayout extends Component {
  render() {
    const { children } = this.props
    return(
      <div className="pages">
        <div className="header">heaer</div>
        <div className="main">{children}</div>
        <div className="footer">footer</div>
      </div>
    )
  }
}

export default BaseLayout
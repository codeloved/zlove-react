import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { renderRouter } from '@/util/func'
import routers from '@/router/index'

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          {renderRouter(routers)}
        </Switch>
      </Router>
    )
  }
}
export default App
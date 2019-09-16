import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { renderRouter } from '@/util/func'
import routers from '@/router/index'
import store from '@/store/index'

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            {renderRouter(routers)}
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App
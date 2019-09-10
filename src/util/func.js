import React from 'react' // 使用jsx语法,必须要引入React,因为jsx会转换为React.createElement
import { Route } from 'react-router-dom'

function renderRouter(routers) {
  return routers.map(item => (
    <Route path={item.path || ''} exact={item.exact || false} component={item.component} />
  ))
}

export {
  renderRouter
}
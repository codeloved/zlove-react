import React from 'react'; // 使用jsx语法,必须要引入React,因为jsx会转换为React.createElement
import { Route, Redirect } from 'react-router-dom';

function renderRouter(routers) {
  return routers.map((item, index) => (
    <Route key={`${item.path}${index}`} path={item.path || ''} exact={item.exact || false} component={item.component} />
  ));
}

const islogin = true;

// 是否需要登录
function authRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) => (islogin ? (<Component {...props} />) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ))
      }
    />
  );
}

// 阻止页面跳转(react-router例子)
function PreventingTransitionsExample() {

}
// 参考react-router例子的的siderBar,路由和子路由等

export {
  renderRouter,
  authRouter,
  PreventingTransitionsExample,
};

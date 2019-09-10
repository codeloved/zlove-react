import Login from '@/pages/login/login'
import NotFound from '@/pages/error/404'
import Home from '@/pages/home/index'

const routers = [
  {
    path: '/',
    exact: true,
    component: Home // 推荐放第一个
  },
  {
    path: '/login',
    exact: false,
    component: Login
  },
  {
    exact: false,
    component: NotFound // 一定要放最后面
  }
]

export default routers
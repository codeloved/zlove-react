import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_TODOS_REQUEST } from '@/action/todo'

// import Api from '@/api/index'

// 处理返回的参数
function dealTodos(result) {
  return result
}

function* getTodos(action) {
  
}

function* todoSage() {
  //每次触发此action(GET_TODOS_REQUEST)会调用getTodos
  takeEvery(GET_TODOS_REQUEST, getTodos)
}

export default todoSage
// 导出常量,为了防止常量重复,增加_文件夹名
export const ADD = 'ADD_TODO'
export const REDUCE = 'REDUCE_TODO'
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST_TODO'
export const TODOS_REQUEST_SUCCESS = 'TODOS_REQUEST_SUCCESS_TODO'
export const TODOS_REQUEST_FAIL = 'TODOS_REQUEST_FAIL_TODO'

// action创建函数
export const add = (payload) => ({
  type: ADD,
  payload
})

export const reduce = (payload) => ({
  type: REDUCE,
  payload
})

export const getTodosRequest = (payload) =>({
  type: GET_TODOS_REQUEST,
  payload
})

export const getTodosRequest = (payload) =>({
  type: TODOS_REQUEST_SUCCESS,
  payload
})

export const todosRequestFail = (payload) =>({
  type: TODOS_REQUEST_FAIL,
  payload
})

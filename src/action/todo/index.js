// 导出常量,为了防止常量重复,增加_文件夹名
export const ADD = 'ADD_TODO'
export const REDUCE = 'REDUCE_TODO'

// action创建函数
export const add = (payload) => ({
  type: ADD,
  payload
})

export const reduce = (payload) => ({
  type: REDUCE,
  payload
})
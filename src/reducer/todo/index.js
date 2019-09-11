import {
  ADD,
  REDUCE
} from '@/action/todo/index'

const initState = {
  count: 0
}

export const todo = (state = initState, {type, payload},) => {
  switch(type) {
    case ADD: 
      return {
        ...state,
        count: payload.count
      }
    case REDUCE:
      return {
        ...state,
        count: payload.count
      }
    default:
      return state
  }
}

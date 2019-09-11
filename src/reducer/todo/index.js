import {
  ADD,
  REDUCE
} from '@/action/todo/index'

const initState = {
  count: 0
}

export const todo = (state = initState, action) => {
  switch(action.type) {
    case ADD: 
    return {
      ...state,
      count: payload
    }
  }
}

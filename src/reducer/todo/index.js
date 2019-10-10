import {
  ADD,
  REDUCE,
  TODOS_REQUEST_SUCCESS,
  TODOS_REQUEST_FAIL,
} from '@/action/todo/index';

const initState = {
  count: 0,
  todoData: [],
  errorMsg: '',
};

export const todo = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        count: payload.count,
      };
    case REDUCE:
      return {
        ...state,
        count: payload.count,
      };
    case TODOS_REQUEST_SUCCESS:
      return {
        ...state,
        todoData: payload.data,
      };
    case TODOS_REQUEST_FAIL:
      return {
        ...state,
        errorMsg: payload.message,
      };
    default:
      return state;
  }
};

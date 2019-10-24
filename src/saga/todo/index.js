import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_TODOS_REQUEST, todosRequestFail, todosRequestSuccess } from '@/action/todo';

// import Api from '@/api/index'

// 处理返回的参数
function dealTodos(result) {
  return result;
}

function* getTodos(action) {
  try {
    // 调用api请求参数
    // const result = yield call(Api.fetch, action.payload)
    const result = {
      data: [
        {
          name: 'todo1',
          value: 'todo one',
        },
        {
          name: 'todo2',
          value: 'todo two',
        },
      ],
    };
    // 拿到数据触发action(put相当于dispatch)
    yield put(todosRequestSuccess(dealTodos(result)));
  } catch (error) {
    yield put(todosRequestFail({ message: error.message }));
  }
}

function* todoSaga() {
  // 每次触发此action(GET_TODOS_REQUEST)会调用getTodos
  yield takeEvery(GET_TODOS_REQUEST, getTodos);
}

export default todoSaga;

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import indexReducer from '@/reducer/index'
import indexSaga from '@/saga/index'

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(indexReducer, applyMiddleware(sagaMiddleWare))

for (const saga in indexSaga) {
  if (indexSaga.hasOwnProperty(saga)) {
    sagaMiddleWare.run(indexSaga[saga])
  }
}

export default store
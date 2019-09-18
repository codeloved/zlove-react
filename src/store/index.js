import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import indexReducer from '@/reducer/index'
import indexSage from '@/saga/index'

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(indexReducer, applyMiddleware(sagaMiddleWare))

for (const saga in indexSage) {
  if (indexSage.hasOwnProperty(saga)) {
    sagaMiddleWare.run(indexSage[saga])
  }
}

export default store
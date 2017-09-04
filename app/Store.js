//@flow
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AppReducer from 'Closies/app/reducers'
import sagas from 'Closies/app/sagas'
import { createLogger } from 'redux-logger'
import { enableBatching } from 'redux-batched-actions'

console.disableYellowBox = true

const logger = createLogger({
  collapsed: true,
  actionTransformer: (action) => ({type: action.type, ...action.payload})
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(enableBatching(AppReducer), applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(sagas, store.dispatch)

export default store

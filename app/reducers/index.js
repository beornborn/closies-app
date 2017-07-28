//@flow
import { combineReducers } from 'redux'
import data from 'Closies/app/reducers/Data'
import view from 'Closies/app/reducers/View'
import app from 'Closies/app/reducers/App'

const RootReducer = combineReducers({
  data,
  app,
  view,
})

export default RootReducer

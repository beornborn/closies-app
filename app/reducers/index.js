//@flow
import { combineReducers } from 'redux'
import data from 'Closies/app/reducers/Data'
import ui from 'Closies/app/reducers/Ui'
import app from 'Closies/app/reducers/App'

const RootReducer = combineReducers({
  data,
  app,
  ui,
})

export default RootReducer

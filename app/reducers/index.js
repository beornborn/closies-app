//@flow
import { combineReducers } from 'redux'
import data from 'Closies/app/reducers/Data'
import ui from 'Closies/app/reducers/Ui'
import app from 'Closies/app/reducers/App'
import { navReducer as nav } from 'Closies/app/Router'
import { reducer as form } from 'redux-form'

const RootReducer = combineReducers({
  form,
  nav,
  data,
  app,
  ui,
})

export default RootReducer

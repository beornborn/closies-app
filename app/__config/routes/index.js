//@flow
import { StackNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/auth__login/Login'
import AreaNavigator from 'Closies/app/__config/routes/AreaNavigator'
import UserNavigator from 'Closies/app/__config/routes/UserNavigator'

const GuestNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
}, {
  headerMode: 'none'
})

export const AllNavigators = StackNavigator({
  Guest: {screen: GuestNavigator},
  User: {screen: UserNavigator},
}, {headerMode: 'none'})

const InitialAction = AreaNavigator.router.getActionForPathAndParams('NewActivity')
const initialState = AllNavigators.router.getStateForAction(InitialAction)
export const navReducer = (state: Object = initialState, action: Action) => AllNavigators.router.getStateForAction(action, state)

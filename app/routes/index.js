//@flow
import { StackNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/Login'
import AreaNavigator from 'Closies/app/routes/AreaNavigator'
import UserNavigator from 'Closies/app/routes/UserNavigator'

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

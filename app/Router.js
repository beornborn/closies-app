//@flow
import { StackNavigator, TabNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/Login'
import Area from 'Closies/app/containers/Area'
import Settings from 'Closies/app/containers/Settings'
import authorize from 'Closies/app/containers/auth/Authorizer'

const UserNavigator = TabNavigator({
  Area: {
    screen: authorize(Area),
    navigationOptions: {
      tabBarLabel: 'Area',
    }
  },
  Settings: {
    screen: authorize(Settings),
    navigationOptions: {
      tabBarLabel: 'Settings',
    }
  }
}, {tabBarPosition: 'bottom', animationEnabled: false})

const GuestNavigator = StackNavigator({
  Login: {
    screen: authorize(Login),
    navigationOptions: {
      title: 'Login',
    }
  },
}, {
  headerMode: 'none'
})

export const AllNavigators = StackNavigator({
  Guest: {screen: GuestNavigator},
  User: {screen: UserNavigator},
}, {headerMode: 'none'})

const InitialAction = UserNavigator.router.getActionForPathAndParams('Area')
const initialState = AllNavigators.router.getStateForAction(InitialAction)
export const navReducer = (state: Object = initialState, action: Action) => AllNavigators.router.getStateForAction(action, state)

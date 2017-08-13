//@flow
import { StackNavigator, TabNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/Login'
import Area from 'Closies/app/containers/Area'
import Activity from 'Closies/app/containers/Activity'
import Settings from 'Closies/app/containers/Settings'
import authorize from 'Closies/app/containers/auth/Authorizer'

const AreaNavigator = StackNavigator({
  Area: {
    screen: authorize(Area),
    navigationOptions: {
      header: null
    }
  },
  Activity: {
    screen: authorize(Activity),
    navigationOptions: {
      title: 'Activity'
    }
  }
})

const UserNavigator = TabNavigator({
  Activities: {
    screen: AreaNavigator,
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
  },
}, {
  headerMode: 'none'
})

export const AllNavigators = StackNavigator({
  Guest: {screen: GuestNavigator},
  User: {screen: UserNavigator},
}, {headerMode: 'none'})

const InitialAction = AreaNavigator.router.getActionForPathAndParams('Area')
const initialState = AllNavigators.router.getStateForAction(InitialAction)
export const navReducer = (state: Object = initialState, action: Action) => AllNavigators.router.getStateForAction(action, state)

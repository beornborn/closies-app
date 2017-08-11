//@flow
import { StackNavigator, TabNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/Login'
import Area from 'Closies/app/containers/Area'
import authorize from 'Closies/app/containers/auth/Authorizer'

export const MainTabNavigator = TabNavigator({
  Area: {
    screen: authorize(Area),
    navigationOptions: {
      tabBarLabel: 'Area',
    }
  }
}, {tabBarPosition: 'bottom'})


export const InitialStackNavigator = StackNavigator({
  Login: {
    screen: authorize(Login),
    navigationOptions: {
      title: 'Login',
    }
  },
  Main: {
    screen: MainTabNavigator,
  },
}, {
  headerMode: 'none'
})

const LoginAction = InitialStackNavigator.router.getActionForPathAndParams('Login')
const initialState = InitialStackNavigator.router.getStateForAction(LoginAction)
export const navReducer = (state: Object = initialState, action: Action) => InitialStackNavigator.router.getStateForAction(action, state)

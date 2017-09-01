//@flow
import { StackNavigator, TabNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/Login'
import Area from 'Closies/app/containers/Area'
import Activity from 'Closies/app/containers/Activity'
import NewActivity from 'Closies/app/containers/NewActivity'
import ActivityList from 'Closies/app/containers/ActivityList'
import Settings from 'Closies/app/containers/Settings'
import { palette } from 'Closies/app/__config/Theme'

const AreaNavigator = StackNavigator({
  Area: {
    screen: Area,
    navigationOptions: {
      header: null
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      title: 'Activity'
    }
  },
  NewActivity: {
    screen: NewActivity,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },
  ActivityList: {
    screen: ActivityList,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },
})

const UserNavigator = TabNavigator({
  Activities: {
    screen: AreaNavigator,
    navigationOptions: {
      tabBarLabel: 'Area',
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: palette.cerulean,
    inactiveTintColor: palette.boulder,
    showLabel: true,
    style: {
      backgroundColor: palette.white,
      borderTopWidth: 1,
      borderColor: palette.cerulean,
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
    }
  },
})

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

const InitialAction = AreaNavigator.router.getActionForPathAndParams('Area')
const initialState = AllNavigators.router.getStateForAction(InitialAction)
export const navReducer = (state: Object = initialState, action: Action) => AllNavigators.router.getStateForAction(action, state)

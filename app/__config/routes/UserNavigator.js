//@flow
import { StackNavigator, TabNavigator } from 'react-navigation'
import Settings from 'Closies/app/containers/Settings'
import AreaNavigator from 'Closies/app/__config/routes/AreaNavigator'
import ClosiesNavigator from 'Closies/app/__config/routes/ClosiesNavigator'
import { palette } from 'Closies/app/__config/Theme'

const SettingsNavigator = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
})

const UserNavigator = TabNavigator({
  Closies: {
    screen: ClosiesNavigator,
    navigationOptions: {
      tabBarLabel: 'Closies',
    }
  },
  Activities: {
    screen: AreaNavigator,
    navigationOptions: {
      tabBarLabel: 'Area',
    }
  },
  Settings: {
    screen: SettingsNavigator,
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

export default UserNavigator

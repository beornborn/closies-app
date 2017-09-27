//@flow
import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Login from 'Closies/app/containers/Login'
import Area from 'Closies/app/containers/area/Area'
import Activity from 'Closies/app/containers/Activity'
import NewActivity from 'Closies/app/containers/new_activity/NewActivity'
import ActivityList from 'Closies/app/containers/activity_list/ActivityList'
import Settings from 'Closies/app/containers/Settings'
import EditProfile from 'Closies/app/containers/profile/EditProfile'
import EditProfileSaveButton from 'Closies/app/containers/profile/EditProfileSaveButton'
import ViewProfile from 'Closies/app/containers/profile/ViewProfile'
import ViewProfileEditButton from 'Closies/app/containers/profile/ViewProfileEditButton'
import Groups from 'Closies/app/containers/groups/Groups'
import GroupView from 'Closies/app/containers/group_view/GroupView'
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
      tabBarVisible: false,
      title: 'Activities',
    }
  },
  ViewProfile: {
    screen: ViewProfile,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Profile',
      headerRight: <ViewProfileEditButton />,
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Edit Profile',
      headerRight: <EditProfileSaveButton />,
    }
  },
})

const SettingsNavigator = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
})

const ClosiesNavigator = StackNavigator({
  Groups: {
    screen: Groups,
    navigationOptions: {
      header: null
    }
  },
  GroupView: {
    screen: GroupView,
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

const InitialAction = ClosiesNavigator.router.getActionForPathAndParams('Groups')
const initialState = AllNavigators.router.getStateForAction(InitialAction)
export const navReducer = (state: Object = initialState, action: Action) => AllNavigators.router.getStateForAction(action, state)

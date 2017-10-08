//@flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import Area from 'Closies/app/containers/activities__area/Area'
import Activity from 'Closies/app/containers/activities__activity/Activity'
import NewActivity from 'Closies/app/containers/activities__new_activity__content/NewActivity'
import NewActivityActions from 'Closies/app/containers/activities__new_activity__content/NewActivityActions'
import SelectGroups from 'Closies/app/containers/activities__new_activity__select_groups/SelectGroups'
import SelectGroupsActions from 'Closies/app/containers/activities__new_activity__select_groups/SelectGroupsActions'
import ActivityList from 'Closies/app/containers/activities__activity_list/ActivityList'
import EditProfile from 'Closies/app/containers/users__edit_profile/EditProfile'
import EditProfileActions from 'Closies/app/containers/users__edit_profile/EditProfileActions'
import ViewProfile from 'Closies/app/containers/users__profile/ViewProfile'
import ViewProfileActions from 'Closies/app/containers/users__profile/ViewProfileActions'

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
      tabBarVisible: false,
      title: 'New Activity',
      headerRight: <NewActivityActions />
    }
  },
  SelectGroups: {
    screen: SelectGroups,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Select Groups',
      headerRight: <SelectGroupsActions />,
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
      headerRight: <ViewProfileActions />,
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Edit Profile',
      headerRight: <EditProfileActions />,
    }
  },
})

export default AreaNavigator

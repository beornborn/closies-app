//@flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import Area from 'Closies/app/containers/area/Area'
import Activity from 'Closies/app/containers/Activity'
import NewActivity from 'Closies/app/containers/new_activity/NewActivity'
import NewActivityToolbar from 'Closies/app/containers/new_activity/NavigationToolbar'
import SelectGroups from 'Closies/app/containers/new_activity/SelectGroups'
import SelectGroupsToolbar from 'Closies/app/containers/new_activity/SelectGroupsToolbar'
import ActivityList from 'Closies/app/containers/activity_list/ActivityList'
import EditProfile from 'Closies/app/containers/profile/EditProfile'
import EditProfileSaveButton from 'Closies/app/containers/profile/EditProfileSaveButton'
import ViewProfile from 'Closies/app/containers/profile/ViewProfile'
import ViewProfileEditButton from 'Closies/app/containers/profile/ViewProfileEditButton'

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
      headerRight: <NewActivityToolbar />
    }
  },
  SelectGroups: {
    screen: SelectGroups,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Select Groups',
      headerRight: <SelectGroupsToolbar />,
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

export default AreaNavigator
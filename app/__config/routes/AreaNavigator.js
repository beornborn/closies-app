//@flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import Area from 'Closies/app/containers/activities__area/Area'
import AreaActions from 'Closies/app/containers/activities__area/AreaActions'
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
import Filter from 'Closies/app/containers/activities__filter/Filter'
import FilterActions from 'Closies/app/containers/activities__filter/FilterActions'

const AreaNavigator = StackNavigator({
  Area: {
    screen: Area,
    navigationOptions: {
      title: 'Activities',
      headerLeft: null,
      headerRight: <AreaActions />,
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Activity'
    }
  },
  Filter: {
    screen: Filter,
    navigationOptions: {
      tabBarVisible: false,
      title: 'Filter',
      headerRight: <FilterActions />,
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

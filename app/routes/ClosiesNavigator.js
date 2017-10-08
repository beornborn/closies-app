//@flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import AddGroupButton from 'Closies/app/containers/groups/AddGroupButton'
import SaveNewGroupButton from 'Closies/app/containers/add_group/SaveNewGroupButton'
import Groups from 'Closies/app/containers/groups/Groups'
import GroupView from 'Closies/app/containers/group_view/GroupView'
import GroupViewToolbar from 'Closies/app/containers/group_view/GroupViewToolbar'
import AddGroup from 'Closies/app/containers/add_group/AddGroup'
import JoinGroup from 'Closies/app/containers/group_view/JoinGroup'
import CurrentInvite from 'Closies/app/containers/group_view/CurrentInvite'

const ClosiesNavigator = StackNavigator({
  Groups: {
    screen: Groups,
    navigationOptions: {
      headerLeft: null,
      title: 'Closies',
      headerRight: <AddGroupButton />,
    }
  },
  GroupView: {
    screen: GroupView,
    navigationOptions: {
      headerRight: <GroupViewToolbar />
    }
  },
  AddGroup: {
    screen: AddGroup,
    navigationOptions: {
      title: 'Add Group',
      headerRight: <SaveNewGroupButton />,
    }
  },
  CurrentInvite: {
    screen: CurrentInvite,
    navigationOptions: {
      title: 'Invite',
    }
  },
  JoinGroup: {
    screen: JoinGroup,
    navigationOptions: {
      title: 'Join Group',
    }
  },
})

export default ClosiesNavigator

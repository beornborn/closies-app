//@flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import AddGroupButton from 'Closies/app/containers/groups__group_list/AddGroupButton'
import SaveNewGroupButton from 'Closies/app/containers/groups__add_group/SaveNewGroupButton'
import Groups from 'Closies/app/containers/groups__group_list/Groups'
import GroupView from 'Closies/app/containers/groups__group/GroupView'
import GroupViewToolbar from 'Closies/app/containers/groups__group/GroupViewToolbar'
import AddGroup from 'Closies/app/containers/groups__add_group/AddGroup'
import JoinGroup from 'Closies/app/containers/groups__join_group/JoinGroup'
import CurrentInvite from 'Closies/app/containers/groups__current_invite/CurrentInvite'

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

//@flow
import React from 'react'
import { StackNavigator } from 'react-navigation'
import GroupsActions from 'Closies/app/containers/groups__group_list/GroupsActions'
import AddGroupActions from 'Closies/app/containers/groups__add_group/AddGroupActions'
import Groups from 'Closies/app/containers/groups__group_list/Groups'
import GroupView from 'Closies/app/containers/groups__group/GroupView'
import GroupViewActions from 'Closies/app/containers/groups__group/GroupViewActions'
import AddGroup from 'Closies/app/containers/groups__add_group/AddGroup'
import JoinGroup from 'Closies/app/containers/groups__join_group/JoinGroup'
import CurrentInvite from 'Closies/app/containers/groups__current_invite/CurrentInvite'

const ClosiesNavigator = StackNavigator({
  Groups: {
    screen: Groups,
    navigationOptions: {
      headerLeft: null,
      title: 'Closies',
      headerRight: <GroupsActions />,
    }
  },
  GroupView: {
    screen: GroupView,
    navigationOptions: {
      headerRight: <GroupViewActions />
    }
  },
  AddGroup: {
    screen: AddGroup,
    navigationOptions: {
      title: 'Add Group',
      headerRight: <AddGroupActions />,
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

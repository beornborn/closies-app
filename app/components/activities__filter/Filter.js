//@flow
import React from 'react'
import pt from 'prop-types'
import { ScrollView } from 'react-native'
import GroupItem from 'Closies/app/components/groups__group_list/GroupItem'
import UserItem from 'Closies/app/components/activities__filter/UserItem'
import { Field } from 'redux-form'
import { SelectArray } from 'Closies/app/components/__shared'
import { Container, Title } from './Filter.style'

export default class Filter extends React.Component {
  static propTypes = {
    groups: pt.arrayOf(pt.object).isRequired,
    users: pt.arrayOf(pt.object).isRequired,
  }

  render() {
    const { groups, users } = this.props

    return <ScrollView>
      <Container>
        <Title>Select Groups</Title>
        <Field name='groupIds' component={SelectArray} valueExtractor={props => props.group.id} >
          {groups.map(group =>
            <GroupItem
              key={group.id}
              group={group}
              onPress={() => {}} />
          )}
        </Field>
        <Title>Select Closies</Title>
        <Field name='userIds' component={SelectArray} valueExtractor={props => props.user.id} >
          {users.map(user =>
            <UserItem
              key={user.id}
              user={user}
              onPress={() => {}} />
          )}
        </Field>
      </Container>
    </ScrollView>
  }
}

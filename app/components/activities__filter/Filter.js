//@flow
import React from 'react'
import pt from 'prop-types'
import { ScrollView } from 'react-native'
import GroupItem from 'Closies/app/components/groups__group_list/GroupItem'
import UserItem from 'Closies/app/components/activities__filter/UserItem'
import { Field } from 'redux-form'
import { SelectArray, DatePicker, DatePickerView } from 'Closies/app/components/__shared'
import { Text } from 'Closies/app/components/__shared/Common.style'
import { Container, Title, Dates } from './Filter.style'

export default class Filter extends React.Component {
  static propTypes = {
    groups: pt.arrayOf(pt.object).isRequired,
    users: pt.arrayOf(pt.object).isRequired,
    startDate: pt.oneOfType([pt.number, pt.object]),
    endDate: pt.oneOfType([pt.number, pt.object]),
  }

  static defaultProps = {
    startDate: 0,
    endDate: 0,
  }

  render() {
    const { groups, users, startDate, endDate } = this.props

    return <ScrollView>
      <Container>
        <Title>Time Range</Title>
        <Dates>
          <Field name='startDate' component={DatePicker} maxDate={endDate}>
            <DatePickerView />
          </Field>
          <Text>to</Text>
          <Field name='endDate' component={DatePicker} minDate={startDate}>
            <DatePickerView />
          </Field>
        </Dates>
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

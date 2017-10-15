//@flow
import React from 'react'
import pt from 'prop-types'
import GroupItem from 'Closies/app/components/groups__group_list/GroupItem'
import { Field } from 'redux-form'
import { GroupsArray } from 'Closies/app/components/__shared'
import { Container, Title } from './Filter.style'

export default class Filter extends React.Component {
  static propTypes = {
    groups: pt.arrayOf(pt.object).isRequired,
  }

  render() {
    const { groups } = this.props

    return <Container>
      <Title>Select Groups</Title>
      <Field name='groupIds' component={GroupsArray}>
        {groups.map(group =>
          <GroupItem
            key={group.id}
            group={group}
            onPress={() => {}} />
        )}
      </Field>
    </Container>
  }
}

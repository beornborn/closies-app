//@flow
import React from 'react'
import pt from 'prop-types'
import GroupItem from 'Closies/app/components/groups/GroupItem'
import { Field } from 'redux-form'
import { GroupsArray } from 'Closies/app/components/shared'
import { Container } from './SelectGroups.style'

export default class SelectGroups extends React.Component {
  static propTypes = {
    groups: pt.arrayOf(pt.object).isRequired,
  }

  render() {
    const { groups } = this.props

    return <Container>
      <Field name='group_ids' component={GroupsArray}>
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

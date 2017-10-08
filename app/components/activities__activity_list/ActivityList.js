//@flow
import React from 'react'
import pt from 'prop-types'
import { View, ScrollView } from 'react-native'
import { Container } from 'Closies/app/components/__shared/Common.style'
import ActivityListItem from 'Closies/app/containers/activities__activity_list/ActivityListItem'

export default class ActivityList extends React.Component {
  static propTypes = {
    activities: pt.arrayOf(pt.object).isRequired
  }

  render() {
    const { activities } = this.props

    return <Container>
      <View style={{height: 10}} />
      <ScrollView>
        {activities.map(a => <ActivityListItem key={a.id} activity={a} />)}
      </ScrollView>
    </Container>
  }
}

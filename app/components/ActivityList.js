//@flow
import React from 'react'
import pt from 'prop-types'
import { View, FlatList } from 'react-native'
import { Container } from 'Closies/app/components/shared/Common.style'
import ActivityListItem from 'Closies/app/containers/ActivityListItem'

export default class ActivityList extends React.Component {
  static propTypes = {
    activities: pt.arrayOf(pt.object).isRequired
  }

  renderActivity = ({item}: Object) => <ActivityListItem activity={item} />

  render() {
    const { activities } = this.props

    return <Container>
      <View style={{height: 10}} />
      <FlatList
        data={activities}
        renderItem={this.renderActivity}
        keyExtractor={a => a.id} />
    </Container>
  }
}

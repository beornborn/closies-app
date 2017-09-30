//@flow
import React from 'react'
import pt from 'prop-types'
import { ScrollView } from 'react-native'
import UserItem from 'Closies/app/containers/group_view/UserItem'
import { Container } from './GroupView.style'

export default class GroupView extends React.Component {
  static propTypes = {
    group: pt.object.isRequired,
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.title
    }
  }

  render() {
    const { group } = this.props

    return <Container>
      <ScrollView>
        {group.user_in_groups.map(uig =>
          <UserItem userInGroup={uig} key={uig.id} />
        )}
      </ScrollView>
    </Container>
  }
}

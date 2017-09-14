//@flow
import React from 'react'
import pt from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import { Container, IconStyle } from './ViewProfileEditButton.style'

export default class ViewProfileEditButton extends React.Component {
  static propTypes = {
    isCurrentUser: pt.bool.isRequired,
    goToEditProfile: pt.func.isRequired,
  }

  render() {
    const { isCurrentUser, goToEditProfile } = this.props

    return <Container>
      {isCurrentUser && <TouchableOpacity onPress={goToEditProfile}>
        <Icon name='pencil' style={IconStyle} />
      </TouchableOpacity>}
    </Container>
  }
}




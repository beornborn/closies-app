//@flow
import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import pt from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, HeaderContainer, Avatar, Name, Body, Contact, IconStyle, ContactAddress } from './ViewProfile.style'

export default class ViewProfile extends React.Component {
  static propTypes = {
    user: pt.object.isRequired
  }

  renderPhone() {
    const { user } = this.props

    return <TouchableOpacity onPress={() => Linking.openURL(`tel:${user.phone_number}`)}>
      <Contact>
        <Icon name='phone' style={IconStyle} />
        <ContactAddress>{user.phone_number}</ContactAddress>
      </Contact>
    </TouchableOpacity>
  }

  renderEmail() {
    const { user } = this.props

    return <TouchableOpacity onPress={() => Linking.openURL(`mailto:${user.email}`)}>
      <Contact>
        <Icon name='email' style={IconStyle} />
        <ContactAddress>{user.email}</ContactAddress>
      </Contact>
    </TouchableOpacity>
  }

  render() {
    const { user } = this.props

    return <Container>
      <HeaderContainer>
        <Avatar source={{uri: user.picture}} />
        <Name>{user.full_name}</Name>
      </HeaderContainer>
      <Body>
        {user.email && this.renderEmail()}
        {user.phone_number && this.renderPhone()}
      </Body>
    </Container>
  }
}

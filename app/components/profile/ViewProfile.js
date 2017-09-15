//@flow
import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'
import pt from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SendIntentAndroid from 'react-native-send-intent'
import MessengerImage from 'Closies/app/assets/images/messenger.png'
import WhatsappImage from 'Closies/app/assets/images/whatsapp.png'
import ViberImage from 'Closies/app/assets/images/viber.png'
import TelegramImage from 'Closies/app/assets/images/telegram.png'
import { Container, HeaderContainer, Avatar, Name, Body, Contact, Viber, IconStyle,
  ContactAddress, Messengers, Whatsapp, Telegram, Messenger } from './ViewProfile.style'

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
        <Messengers>
          {user.messengers.includes('messenger') && <TouchableOpacity
            onPress={() => SendIntentAndroid.openApp('com.facebook.orca')}>
            <Messenger source={MessengerImage} />
          </TouchableOpacity>}
          {user.messengers.includes('whatsapp') && <TouchableOpacity
            onPress={() => SendIntentAndroid.openApp('com.whatsapp')}>
            <Whatsapp source={WhatsappImage} />
          </TouchableOpacity>}
          {user.messengers.includes('viber') && <TouchableOpacity
            onPress={() => SendIntentAndroid.openApp('com.viber.voip')}>
            <Viber source={ViberImage} />
          </TouchableOpacity>}
          {user.messengers.includes('telegram') && <TouchableOpacity
            onPress={() => SendIntentAndroid.openApp('org.telegram.messenger')}>
            <Telegram source={TelegramImage} />
          </TouchableOpacity>}
        </Messengers>
      </Body>
    </Container>
  }
}

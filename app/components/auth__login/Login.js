//@flow
import React from 'react'
import pt from 'prop-types'
import { View } from 'react-native'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Title, IconStyle, ButtonStyle } from './Login.style'

export default class Login extends React.Component {
  static propTypes = {
    doLogin: pt.func.isRequired,
  }

  render() {
    const { doLogin } = this.props

    return <Container>
      <Title>Closies</Title>
      <View style={{height: 100}} />
      <Button
        upperCase={false}
        text='Login with Facebook'
        onPress={doLogin}
        icon={<Icon name='facebook-box' style={IconStyle} />}
        style={ButtonStyle} />
    </Container>
  }
}

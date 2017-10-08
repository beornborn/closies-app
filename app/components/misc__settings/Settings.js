//@flow
import React from 'react'
import pt from 'prop-types'
import { ListItem } from 'react-native-material-ui'
import { Container } from './Settings.style'

export default class Settings extends React.Component {
  static propTypes = {
    doLogout: pt.func.isRequired,
    goToEditProfile: pt.func.isRequired,
  }

  render() {
    const { doLogout, goToEditProfile } = this.props

    return <Container>
      <ListItem centerElement='Edit Profile' divider={true} onPress={goToEditProfile} />
      <ListItem centerElement='Log Out' divider={true} onPress={doLogout} />
    </Container>
  }
}

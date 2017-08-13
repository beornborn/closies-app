//@flow
import React from 'react'
import pt from 'prop-types'
import { ListItem } from 'react-native-material-ui'
import { Container } from './Settings.style'

export default class Settings extends React.Component {
  static propTypes = {
    doLogout: pt.func.isRequired,
  }

  render() {
    const { doLogout } = this.props

    return <Container>
      <ListItem centerElement='Log Out' divider={true} onPress={doLogout} />
    </Container>
  }
}

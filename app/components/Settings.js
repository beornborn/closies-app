//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Text } from 'react-native'
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
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
      <ListItem centerElement='Settings' divider={true} onPress={()=>{}} />
    </Container>
  }
}

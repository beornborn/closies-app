//@flow
import React from 'react'
import pt from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import { Container, getIconStyle } from './EditProfileSaveButton.style'

export default class EditProfileSaveButton extends React.Component {
  static propTypes = {
    valid: pt.bool.isRequired,
    submit: pt.func.isRequired,
  }

  render() {
    const { submit, valid } = this.props

    return <Container>
      <TouchableOpacity disabled={!valid} onPress={submit}>
        <Icon name='check' style={getIconStyle(valid)} />
      </TouchableOpacity>
    </Container>
  }
}

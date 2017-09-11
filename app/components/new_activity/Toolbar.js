//@flow
import React from 'react'
import pt from 'prop-types'
import { Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Spacer } from 'Closies/app/components/shared/Common.style'
import { Container, IconStyle} from './Toolbar.style'

export default class Toolbar extends React.Component {
  static propTypes = {
    launchImageLibrary: pt.func.isRequired,
    launchCamera: pt.func.isRequired,
    submit: pt.func.isRequired,
    valid: pt.bool.isRequired,
    submitting: pt.bool.isRequired,
  }

  render() {
    const { launchImageLibrary, launchCamera, submit, valid, submitting } = this.props

    return <Container>
      <TouchableOpacity onPress={launchImageLibrary}>
        <Icon name='image' style={IconStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={launchCamera}>
        <Icon name='camera' style={IconStyle} />
      </TouchableOpacity>
      <Spacer />
      <Button
        title='Post'
        onPress={submit}
        disabled={!valid || submitting} />
    </Container>
  }
}

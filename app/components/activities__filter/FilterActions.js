//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, MUIIcon } from 'Closies/app/components/__shared/Actions.style'

export default class EditProfileActions extends React.Component {
  static propTypes = {
    pristine: pt.bool.isRequired,
    submit: pt.func.isRequired,
  }

  render() {
    const { submit, pristine } = this.props

    return <Container>
      <TouchableOpacity disabled={pristine} onPress={submit}>
        <MUIIcon name='check' disabled={pristine} />
      </TouchableOpacity>
    </Container>
  }
}

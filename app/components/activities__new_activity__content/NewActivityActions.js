//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, TextButton } from 'Closies/app/components/__shared/Actions.style'

export default class NewActivityActions extends React.Component {
  static propTypes = {
    valid: pt.bool.isRequired,
    next: pt.func.isRequired,
  }

  render() {
    const { valid, next } = this.props

    return <Container>
      <TouchableOpacity disabled={!valid} onPress={next}>
        <TextButton disabled={!valid}>Next</TextButton>
      </TouchableOpacity>
    </Container>
  }
}

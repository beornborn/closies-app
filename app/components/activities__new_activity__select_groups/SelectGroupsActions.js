//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, TextButton } from 'Closies/app/components/__shared/Actions.style'

export default class SelectGroupsActions extends React.Component {
  static propTypes = {
    valid: pt.bool.isRequired,
    submitting: pt.bool.isRequired,
    post: pt.func.isRequired,
  }

  render() {
    const { valid, submitting, post } = this.props

    return <Container>
      <TouchableOpacity disabled={!valid || submitting} onPress={post}>
        <TextButton disabled={!valid || submitting}>Post</TextButton>
      </TouchableOpacity>
    </Container>
  }
}

//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, Toolbar, Post } from './SelectGroupsToolbar.style'

export default class SelectGroupsToolbar extends React.Component {
  static propTypes = {
    valid: pt.bool.isRequired,
    submitting: pt.bool.isRequired,
    post: pt.func.isRequired,
  }

  render() {
    const { valid, submitting, post } = this.props

    return <Container>
      <Toolbar>
        <TouchableOpacity disabled={!valid || submitting} onPress={post}>
          <Post disabled={!valid || submitting}>Post</Post>
        </TouchableOpacity>
      </Toolbar>
    </Container>
  }
}

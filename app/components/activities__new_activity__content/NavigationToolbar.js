//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, Toolbar, Next } from './NavigationToolbar.style'

export default class NavigationToolbar extends React.Component {
  static propTypes = {
    valid: pt.bool.isRequired,
    next: pt.func.isRequired,
  }

  render() {
    const { valid, next } = this.props

    return <Container>
      <Toolbar>
        <TouchableOpacity disabled={!valid} onPress={next}>
          <Next disabled={!valid}>Next</Next>
        </TouchableOpacity>
      </Toolbar>
    </Container>
  }
}

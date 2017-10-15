//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Container, MUIIcon } from 'Closies/app/components/__shared/Actions.style'

export default class AreaActions extends React.Component {
  static propTypes = {
    goToNewActivity: pt.func.isRequired,
    goToFilter: pt.func.isRequired,
  }

  render() {
    const { goToNewActivity, goToFilter } = this.props

    return <Container>
      <TouchableOpacity onPress={goToFilter}>
        <MUIIcon name='filter' style={{fontSize: 25}} />
      </TouchableOpacity>
      <View style={{width: 20}} />
      <TouchableOpacity onPress={goToNewActivity}>
        <MUIIcon name='plus' />
      </TouchableOpacity>
    </Container>
  }
}

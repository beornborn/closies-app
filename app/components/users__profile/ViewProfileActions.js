//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, MUIIcon } from 'Closies/app/components/__shared/Actions.style'

export default class ViewProfileActions extends React.Component {
  static propTypes = {
    isCurrentUser: pt.bool.isRequired,
    goToEditProfile: pt.func.isRequired,
  }

  render() {
    const { isCurrentUser, goToEditProfile } = this.props

    return <Container>
      {isCurrentUser && <TouchableOpacity onPress={goToEditProfile}>
        <MUIIcon name='pencil' />
      </TouchableOpacity>}
    </Container>
  }
}




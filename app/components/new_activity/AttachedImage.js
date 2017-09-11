//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { FullWidthImage } from 'Closies/app/components/shared'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, CloseIconStyle, CloseIconContainer } from './AttachedImage.style'

export default class AttachedImage extends React.Component {
  static propTypes = {
    image: pt.object.isRequired,
    remove: pt.func.isRequired,
  }

  render() {
    const { image, remove } = this.props

    return <Container>
      <FullWidthImage source={{uri: image.uri}} />
      <CloseIconContainer>
        <TouchableOpacity onPress={(remove)}>
          <Icon name='close' style={CloseIconStyle} />
        </TouchableOpacity>
      </CloseIconContainer>
    </Container>
  }
}

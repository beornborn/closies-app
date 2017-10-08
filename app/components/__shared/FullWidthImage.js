//@flow
import React from 'react'
import pt from 'prop-types'
import { Image, View } from 'react-native'

export default class FullWidthImage extends React.Component {
  static propTypes = {
    source: pt.object.isRequired,
  }

  state = {width: 0, height: 0}

  onLayout = (event: Object) => {
    const containerWidth = event.nativeEvent.layout.width

    Image.getSize(this.props.source.uri, (width, height) => {
      this.setState({
        width: containerWidth,
        height: containerWidth * height / width
      })
    })
  }

  render() {
    const { width, height } = this.state

    return <View onLayout={this.onLayout}>
      <Image source={this.props.source} style={{width, height}} />
    </View>
  }
}

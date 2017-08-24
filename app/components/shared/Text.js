//@flow
import React from 'react'
import pt from 'prop-types'
import { Text as SourceText } from 'react-native'
import { palette } from 'Closies/app/__config/Theme'

export default class Text extends React.Component {
  static propTypes = {
    style: pt.object
  }

  static defaultProps = {style: {}}

  render() {
    return <SourceText {...this.props} style={{color: palette.mineshaft, ...(this.props.style)}} />
  }
}

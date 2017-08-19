//@flow
import React from 'react'
import { Text as SourceText } from 'react-native'
import { palette } from 'Closies/app/__config/Theme'

export default class Text extends React.Component {
  render() {
    return <SourceText {...this.props} style={{color: palette.mineshaft, ...(this.props.style || {})} } />
  }
}

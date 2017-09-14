//@flow
import React from 'react'
import pt from 'prop-types'
import { TextInput as NativeInput } from 'react-native'
import { palette } from 'Closies/app/__config/Theme'

export default class TextInput extends React.Component {
  static propTypes = {
    input: pt.shape({
      value: pt.oneOfType([pt.string, pt.object]).isRequired,
      onChange: pt.func.isRequired,
    }).isRequired
  }

  render() {
    const { input, ...other } = this.props
    const value = (typeof input.value === 'object') ? input.value.value : input.value

    return <NativeInput
      selectionColor={palette.cerulean}
      {...other}
      value={value}
      onChangeText={v => input.onChange({value: v.trim()})} />
  }
}

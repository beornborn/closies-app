//@flow
import React from 'react'
import pt from 'prop-types'
import { TextInput as NativeInput } from 'react-native'

export default class TextInput extends React.Component {
  static propTypes = {
    input: pt.shape({
      value: pt.string.isRequired,
      onChange: pt.func.isRequired,
    }).isRequired
  }

  render() {
    const { input, ...other } = this.props

    return <NativeInput
      {...other}
      value={input.value.value}
      onChangeText={(v: string) => input.onChange({value: v})} />
  }
}

//@flow
import React from 'react'
import { TextInput as NativeInput } from 'react-native'

export default class TextInput extends React.Component {
  render() {
    const { input, meta, ...other } = this.props
    return <NativeInput
      {...other}
      value={input.value.value}
      onChangeText={(v: string) => input.onChange({value: v})} />
  }
}

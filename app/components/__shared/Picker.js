//@flow
import React from 'react'
import pt from 'prop-types'
import { Picker as NativePicker } from 'react-native'

export default class Picker extends React.Component {
  static propTypes = {
    input: pt.shape({
      value: pt.oneOfType([pt.string, pt.object]).isRequired,
      onChange: pt.func.isRequired,
    }).isRequired
  }

  render() {
    const { input, ...other } = this.props
    const value = (typeof input.value === 'object') ? input.value.value : input.value

    return <NativePicker
      {...other}
      selectedValue={value}
      onValueChange={v => input.onChange({value: v})} />
  }
}

//@flow
import React from 'react'
import { TouchableOpacity, DatePickerAndroid } from 'react-native'
import pt from 'prop-types'
import moment from 'moment'

export default class DatePicker extends React.Component {
  static propTypes = {
    children: pt.node.isRequired,
    meta: pt.object.isRequired,
    input: pt.object.isRequired,
    minDate: pt.oneOfType([pt.number, pt.object]),
    maxDate: pt.oneOfType([pt.number, pt.object]),
  }

  static defaultProps = {
    minDate: 0,
    maxDate: 0,
  }

  onDate = async () => {
    const { input, minDate, maxDate } = this.props

    try {
      const selected = await DatePickerAndroid.open({
        date: this.getValue(input.value),
        minDate: this.getValue(minDate),
        maxDate: this.getValue(maxDate),
      })
      if (selected.action === 'dateSetAction') {
        const date = moment().year(selected.year).month(selected.month).date(selected.day)
        input.onChange({value: date.unix() * 1000})
      }
    } catch (a) {
      console.warn('Cannot open date picker', a)
    }
  }

  getValue = (inputValue: any) => {
    const value = (typeof inputValue === 'object') ? inputValue.value : inputValue
    return value
  }

  render() {
    const { children, input } = this.props

    return (
      <TouchableOpacity onPress={this.onDate}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            ...child.props,
            value: this.getValue(input.value),
          })
        })}
      </TouchableOpacity>
    )
  }
}

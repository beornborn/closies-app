//@flow
import React from 'react'
import { ScrollView } from 'react-native'
import pt from 'prop-types'

export default class SelectArray extends React.Component {
  static propTypes = {
    children: pt.node.isRequired,
    meta: pt.object.isRequired,
    input: pt.object.isRequired,
    valueExtractor: pt.func.isRequired,
  }

  handleChange = (clickedValue: number) => {
    const { input } = this.props
    const value = input.value || []
    const included = value.includes(clickedValue)
    if (included) {
      const newValue = value.filter(x => x !== clickedValue)
      input.onChange(newValue)
    } else {
      input.onChange(value.concat(clickedValue))
    }
  }

  render() {
    const { children, input, valueExtractor } = this.props
    const value = input.value || []

    return (
      <ScrollView>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            ...child.props,
            selected: value.includes(valueExtractor(child.props)),
            onPress: () => this.handleChange(valueExtractor(child.props)),
          })
        })}
      </ScrollView>
    )
  }
}

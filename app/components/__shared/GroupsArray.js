//@flow
import React from 'react'
import { View } from 'react-native'
import pt from 'prop-types'

export default class GroupsArray extends React.Component {
  static propTypes = {
    children: pt.node.isRequired,
    meta: pt.object.isRequired,
    input: pt.object.isRequired,
  }

  handleChange = (groupId: number) => {
    const { input } = this.props
    const value = input.value || []
    const included = value.includes(groupId)
    if (included) {
      const newValue = value.filter(x => x !== groupId)
      input.onChange(newValue)
    } else {
      input.onChange(value.concat(groupId))
    }
  }

  render() {
    const { children, input } = this.props
    const value = input.value || []

    return (
      <View>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            ...child.props,
            selected: value.includes(child.props.group.id),
            onPress: () => this.handleChange(child.props.group.id),
          })
        })}
      </View>
    )
  }
}

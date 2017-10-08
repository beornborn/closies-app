//@flow
import React from 'react'
import { View } from 'react-native'
import pt from 'prop-types'
import _ from 'lodash'

export default class CheckboxArray extends React.Component {
  static propTypes = {
    children: pt.node.isRequired,
    fields: pt.object.isRequired,
    meta: pt.object.isRequired,
  }

  handleChange = (checked: boolean, value: string) => {
    const { fields } = this.props

    if (checked) {
      fields.push({value})
    } else {
      const index = _.findIndex(fields.getAll(), {value})
      fields.remove(index)
    }
  }

  render() {
    const { children, fields } = this.props

    return (
      <View>
        {React.Children.map(children, child => {
          const values = fields.getAll()
          return React.cloneElement(child, {
            ...child.props,
            key: child.props.value,
            onCheck: this.handleChange,
            checked: _.findIndex(values, {value: child.props.value}) > -1,
          })
        })}
      </View>
    )
  }
}

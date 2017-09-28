//@flow
import React from 'react'
import pt from 'prop-types'
import { View, TouchableWithoutFeedback, Keyboard, Picker as NativePicker } from 'react-native'
import { Field } from 'redux-form'
import _ from 'lodash'
import { TextInput, Picker } from 'Closies/app/components/shared'
import { Container, InputStyle, Label } from './AddGroup.style'

export default class AddGroup extends React.Component {
  static propTypes = {
    groupsCounts: pt.shape({
      family: pt.number.isRequired,
      closies: pt.number.isRequired,
      special: pt.number.isRequired,
    }).isRequired,
    config: pt.object.isRequired,
  }

  render() {
    const { groupsCounts, config } = this.props
    const canAddFamily = groupsCounts.family < config.size_type_counts.family
    const canAddClosies = groupsCounts.closies < config.size_type_counts.closies
    const canAddSpecial = groupsCounts.special < config.size_type_counts.special
    const canAddGroup = canAddFamily || canAddClosies || canAddSpecial

    const options = _.compact([
      canAddFamily && <NativePicker.Item label='Family' value='family' key='family' />,
      canAddClosies && <NativePicker.Item label='Closies' value='closies' key='closies' />,
      canAddSpecial && <NativePicker.Item label='Special' value='special' key='special' />,
    ])
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <View style={{height: 20}} />
        <Label>Name</Label>
        <Field name='name' component={TextInput}
          placeholder='Name'
          style={InputStyle} />
        <View style={{height: 20}} />
        <Label>Type</Label>
        {canAddGroup && <Field name='size_type' component={Picker}>
          {options}
        </Field>}
      </Container>
    </TouchableWithoutFeedback>
  }
}

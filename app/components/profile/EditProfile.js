//@flow
import React from 'react'
import { TouchableWithoutFeedback, Keyboard, ScrollView, View } from 'react-native'
import { Field } from 'redux-form'
import { TextInput } from 'Closies/app/components/shared'
import { Container, InputStyle, Label } from './EditProfile.style'

export default class EditProfile extends React.Component {
  render() {
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ScrollView>
          <Label>Name</Label>
          <Field name='full_name' component={TextInput}
            style={InputStyle}
            placeholder='Name' />
          <View style={{height: 20}} />
          <Label>Phone Number</Label>
          <Field name='phone_number' component={TextInput}
            style={InputStyle}
            keyboardType='phone-pad'
            placeholder='+380931234567' />
          <View style={{height: 20}} />
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  }
}

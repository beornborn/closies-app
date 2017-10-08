//@flow
import React from 'react'
import { TouchableWithoutFeedback, Keyboard, ScrollView, View } from 'react-native'
import { Field, FieldArray } from 'redux-form'
import { TextInput, CheckboxArray } from 'Closies/app/components/__shared'
import { Checkbox } from 'react-native-material-ui'
import { Container, InputStyle, Label, ReachMe, SubContainer, Divider, CheckboxStyle } from './EditProfile.style'

export default class EditProfile extends React.Component {
  render() {
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ScrollView>
          <SubContainer>
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
          </SubContainer>
          <Divider />
          <SubContainer>
            <ReachMe>You can reach me also by:</ReachMe>
          </SubContainer>
          <FieldArray name='messengers' component={CheckboxArray}>
            <Checkbox
              label='Messenger'
              style={CheckboxStyle}
              value='messenger' />
            <Checkbox
              label='Whatsapp'
              style={CheckboxStyle}
              value='whatsapp' />
            <Checkbox
              label='Viber'
              style={CheckboxStyle}
              value='viber' />
            <Checkbox
              label='Telegram'
              style={CheckboxStyle}
              value='telegram' />
          </FieldArray>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  }
}

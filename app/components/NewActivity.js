//@flow
import React from 'react'
import pt from 'prop-types'
import { Button, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Text, TextInput } from 'Closies/app/components/shared'
import { Container } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'
import { Field } from 'redux-form'

export default class NewActivity extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
    fetchCurrentLocation: pt.func.isRequired,
    createActivity: pt.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCurrentLocation()
  }

  submit = (formData: Object) => {
    const { createActivity, location: { coords: { longitude, latitude } } } = this.props
    Keyboard.dismiss()
    createActivity({...formData, longitude, latitude})
  }

  render() {
    const { location, handleSubmit } = this.props

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Text style={{padding: 15}}>{`${location.coords.latitude} ${location.coords.longitude}`}</Text>
        <Field name='description' component={TextInput}
          placeholder={'What\'s happening?'}
          multiline={true}
          numberOfLines={4}
          autoFocus={true}
          underlineColorAndroid='transparent'
          selectionColor={palette.cerulean}
          style={{fontSize: 25, padding: 15, textAlignVertical: 'top'}} />
        <View style={{flex: 1}} />
        <Button title='Post' onPress={handleSubmit(this.submit)} />
      </Container>
    </TouchableWithoutFeedback>
  }
}

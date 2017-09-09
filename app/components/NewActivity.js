//@flow
import React from 'react'
import pt from 'prop-types'
import { Button, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { TextInput } from 'Closies/app/components/shared'
import { Container, Spacer } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'
import { Field } from 'redux-form'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Toolbar, IconStyle } from './NewActivity.style'

export default class NewActivity extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
    fetchCurrentLocation: pt.func.isRequired,
    createActivity: pt.func.isRequired,
    handleSubmit: pt.func.isRequired,
    submitting: pt.bool.isRequired,
    valid: pt.bool.isRequired,
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
    const { handleSubmit, valid, submitting } = this.props

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Field name='description' component={TextInput}
          placeholder={'What\'s happening?'}
          multiline={true}
          numberOfLines={4}
          autoFocus={true}
          underlineColorAndroid='transparent'
          selectionColor={palette.cerulean}
          style={{fontSize: 25, padding: 25, textAlignVertical: 'top'}} />
        <View style={{flex: 1}} />
        <Toolbar>
          <TouchableOpacity onPress={() => { console.log('123123') }}>
            <Icon name='image' style={IconStyle} />
          </TouchableOpacity>
          <Spacer />
          <Button
            title='Post'
            onPress={handleSubmit(this.submit)}
            disabled={!valid || submitting} />
        </Toolbar>
      </Container>
    </TouchableWithoutFeedback>
  }
}

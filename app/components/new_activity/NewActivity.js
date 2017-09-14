//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableWithoutFeedback, Keyboard, ScrollView, View } from 'react-native'
import { TextInput } from 'Closies/app/components/shared'
import { Field } from 'redux-form'
import Toolbar from 'Closies/app/containers/new_activity/Toolbar'
import AttachedImage from 'Closies/app/containers/new_activity/AttachedImage'
import { AbsoluteContainer, InputStyle } from './NewActivity.style'

export default class NewActivity extends React.Component {
  static propTypes = {
    location: pt.object.isRequired,
    fetchCurrentLocation: pt.func.isRequired,
    createActivity: pt.func.isRequired,
    handleSubmit: pt.func.isRequired,
    image: pt.object,
  }

  static defaultProps = {image: undefined}

  componentDidMount() {
    this.props.fetchCurrentLocation()
  }

  submit = (formData: Object) => {
    const { createActivity, location: { coords: { longitude, latitude } } } = this.props
    Keyboard.dismiss()
    return createActivity({...formData, longitude, latitude})
  }

  render() {
    const { image, handleSubmit } = this.props

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <AbsoluteContainer>
        <ScrollView>
          <Field name='description' component={TextInput}
            placeholder={'What\'s happening?'}
            multiline={true}
            numberOfLines={4}
            autoFocus={true}
            underlineColorAndroid='transparent'
            style={InputStyle} />
          {image && image.uri && <AttachedImage />}
          <View style={{height: 50}} />
        </ScrollView>
        <Toolbar submit={handleSubmit(this.submit)} />
      </AbsoluteContainer>
    </TouchableWithoutFeedback>
  }
}

//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableWithoutFeedback, Keyboard, ScrollView, View } from 'react-native'
import { TextInput } from 'Closies/app/components/__shared'
import { Field } from 'redux-form'
import Toolbar from 'Closies/app/containers/activities__new_activity__content/Toolbar'
import AttachedImage from 'Closies/app/containers/activities__new_activity__content/AttachedImage'
import { AbsoluteContainer, InputStyle } from './NewActivity.style'

export default class NewActivity extends React.Component {
  static propTypes = {
    fetchCurrentLocation: pt.func.isRequired,
    image: pt.object,
  }

  static defaultProps = {image: undefined}

  componentDidMount() {
    this.props.fetchCurrentLocation()
  }

  render() {
    const { image } = this.props

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
        <Toolbar />
      </AbsoluteContainer>
    </TouchableWithoutFeedback>
  }
}

//@flow
import React from 'react'
import pt from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'Closies/app/components/__shared'
import { Field } from 'redux-form'
import { Container, InputStyle, MUIIcon } from './NewComment.style'

export default class NewComment extends React.Component {
  static propTypes = {
    onSubmit: pt.func.isRequired,
    handleSubmit: pt.func.isRequired,
    valid: pt.bool.isRequired,
    submitting: pt.bool.isRequired,
  }

  getOnSubmit = () => {
    const { onSubmit, handleSubmit, valid, submitting } = this.props

    if (!valid || submitting) {
      return () => {}
    } else {
      return handleSubmit(onSubmit)
    }
  }

  render() {
    return <Container>
      <Field name='body' component={TextInput}
        placeholder='Write a message'
        underlineColorAndroid='transparent'
        style={InputStyle} />
      <TouchableOpacity onPress={this.getOnSubmit()}>
        <MUIIcon name='send' />
      </TouchableOpacity>
    </Container>
  }
}

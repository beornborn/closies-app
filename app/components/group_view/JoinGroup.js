//@flow
import React from 'react'
import pt from 'prop-types'
import { View, Button } from 'react-native'
import { TextInput } from 'Closies/app/components/shared'
import { Field } from 'redux-form'
import { Container, InputStyle, ServerError } from './JoinGroup.style'

export default class JoinGroup extends React.Component {
  static propTypes = {
    handleSubmit: pt.func.isRequired,
    joinGroup: pt.func.isRequired,
    valid: pt.bool.isRequired,
    submitting: pt.bool.isRequired,
    pristine: pt.bool.isRequired,
    error: pt.string,
  }

  static defaultProps = {error: undefined}

  render() {
    const { handleSubmit, joinGroup, valid, submitting, pristine, error } = this.props

    return <Container>
      {error && <ServerError>{error}</ServerError>}
      <Field name='token' component={TextInput}
        placeholder={'Your invitation code'}
        style={InputStyle} />
      <View style={{height: 20}} />
      <Button title='Join' onPress={handleSubmit(joinGroup)} disabled={!valid || submitting || pristine} />
    </Container>
  }
}

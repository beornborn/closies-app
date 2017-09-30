//@flow
import React from 'react'
import pt from 'prop-types'
import { Clipboard, TouchableOpacity, Button } from 'react-native'
import moment from 'moment'
import { Container, Title, Code, Explanation, Explanations, Copied } from './CurrentInvite.style'

export default class CurrentInvite extends React.Component {
  static propTypes = {
    invite: pt.object.isRequired,
    goBack: pt.func.isRequired,
  }

  state = {copied: false}

  copy = () => {
    Clipboard.setString(this.props.invite.token)
    this.setState({copied: true})
  }

  render() {
    const { invite, goBack } = this.props
    const { copied } = this.state
    const validFor = moment.duration(invite.valid_for, 'seconds').humanize()

    return <Container>
      <Title>Copy this code and send it to your Closie</Title>
      <TouchableOpacity onPress={this.copy}>
        <Code>{invite.token.split('').join('\u200A')}</Code>
      </TouchableOpacity>
      {copied && <Copied>Copied!</Copied>}
      <Explanations>
        <Explanation>The invitation is valid for {validFor}.</Explanation>
        <Explanation>You will not be able to see it again once you leave this screen.</Explanation>
        <Explanation>You always can generate new invitation again.</Explanation>
      </Explanations>
      {copied && <Button title='Back to group' onPress={goBack} />}
    </Container>
  }
}

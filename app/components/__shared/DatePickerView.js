//@flow
import React from 'react'
import pt from 'prop-types'
import { Text } from 'Closies/app/components/__shared/Common.style'
import moment from 'moment'
import { Container, MUIIcon } from './DatePickerView.style'

export default class DatePickerView extends React.Component {
  static propTypes = {
    value: pt.oneOfType([pt.number, pt.string]),
  }

  static defaultProps = {value: 0}

  render() {
    const { value } = this.props

    return <Container>
      <Text>{moment(value).format('D MMM YYYY')}</Text>
      <MUIIcon name='menu-down' />
    </Container>
  }
}

//@flow
import React from 'react'
import pt from 'prop-types'
import BottomNavigation from 'Closies/app/components/BottomNavigation'
import { Container } from 'Closies/app/components/WithFooter.style'

export default class WithFooter extends React.Component {
  static propTypes = {
    Component: pt.oneOfType([pt.element, pt.func]).isRequired,
  }

  render() {
    const { Component } = this.props

    return <Container>
      <Component />
      <BottomNavigation />
    </Container>
  }
}

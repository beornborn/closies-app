//@flow
import React from 'react'
import pt from 'prop-types'
import { Platform, BackHandler, ToastAndroid } from 'react-native'

export default class BackButton extends React.Component {
  static propTypes = {
    goBack: pt.func.isRequired,
    goToCluster: pt.func.isRequired,
    currentRoute: pt.object.isRequired,
    activityIds: pt.arrayOf(pt.number).isRequired,
  }

  backButtonListener = {remove: () => {}}
  lastBackButtonPress = 0

  handleBack() {
    const { goBack, currentRoute, goToCluster, activityIds } = this.props

    if (currentRoute.routeName === 'Area' && activityIds.length > 0) {
      goToCluster([])
    } else if (currentRoute.routeName === 'Area' || currentRoute.routeName === 'Login') {
      if (new Date().getTime() - this.lastBackButtonPress < 2000) {
        BackHandler.exitApp()
      }
      ToastAndroid.show('press again to exit', ToastAndroid.SHORT)
      this.lastBackButtonPress = new Date().getTime()
    } else {
      goBack()
    }

    return true
  }

  componentDidMount() {
    this.backButtonListener = BackHandler.addEventListener('hardwareBackPress', () => this.handleBack())
  }

  componentWillUnmount() {
    this.backButtonListener.remove()
  }

  render() {
    return null
  }
}

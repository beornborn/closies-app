//@flow
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { palette } from 'Closies/app/__config/Theme'

export default class Home extends React.Component {
  static propTypes = {

  }

  icons = {
    map: {
      active: <Icon size={24} color={'#e74c3c'} name='google-maps' />,
      default: <Icon size={24} color={palette.mineShaft} name='google-maps' />
    }
  }

  render() {
    return <BottomNavigation
      labelColor='white'
      rippleColor='white'
      activeLabelColor='#e74c3c'
      style={{ height: 56, elevation: 8, borderTopWidth: 0, position: 'absolute', left: 0, bottom: 0, right: 0 }}
      onTabChange={(newTabIndex) => console.log(`New Tab at position ${newTabIndex}`)}>
      <Tab
        barBackgroundColor={'#fff'}
        label='Map'
        icon={this.icons.map.default}
        activeIcon={this.icons.map.active} />
      <Tab
        barBackgroundColor={'#fff'}
        label='Map'
        icon={this.icons.map.default}
        activeIcon={this.icons.map.active} />
      <Tab
        barBackgroundColor={'#fff'}
        label='Map'
        icon={this.icons.map.default}
        activeIcon={this.icons.map.active} />
      <Tab
        barBackgroundColor={'#fff'}
        label='Map'
        icon={this.icons.map.default}
        activeIcon={this.icons.map.active} />
    </BottomNavigation>
  }
}

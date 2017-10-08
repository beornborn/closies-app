//@flow
import { connect } from 'react-redux'
import Settings from 'Closies/app/components/misc__settings/Settings'
import { bindActionCreators } from 'redux'
import { doLogout } from 'Closies/app/reducers/Saga'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return bindActionCreators({
    doLogout,
    goToEditProfile: () => NavigationActions.navigate({routeName: 'EditProfile'})
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

//@flow
import { connect } from 'react-redux'
import AreaActions from 'Closies/app/components/activities__area/AreaActions'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToNewActivity: () => dispatch(NavigationActions.navigate({routeName: 'NewActivity'})),
  goToFilter: () => dispatch(NavigationActions.navigate({routeName: 'Filter'})),
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaActions)

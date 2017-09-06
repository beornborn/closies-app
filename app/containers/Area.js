//@flow
import { connect } from 'react-redux'
import Area from 'Closies/app/components/Area'
import { getAreaData } from 'Closies/app/reducers/selectors/App'
import { getForceRerender } from 'Closies/app/reducers/selectors/Ui'
import { fetchCurrentLocation } from 'Closies/app/reducers/Saga'
import { NavigationActions } from 'react-navigation'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state: Object): Object => ({
  area: getAreaData(state),
  forceRerender: getForceRerender(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return bindActionCreators({
    newActivity: () => NavigationActions.navigate({routeName: 'NewActivity'}),
    fetchCurrentLocation,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)

//@flow
import { connect } from 'react-redux'
import Area from 'Closies/app/components/activities__area/Area'
import { getAreaData } from 'Closies/app/reducers/selectors/App'
import { getForceRerender } from 'Closies/app/reducers/selectors/Ui'
import { fetchCurrentLocation } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state: Object): Object => ({
  area: getAreaData(state),
  forceRerender: getForceRerender(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return bindActionCreators({
    fetchCurrentLocation,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)

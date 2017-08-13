//@flow
import { connect } from 'react-redux'
import Activity from 'Closies/app/components/Activity'
import { getSelectedActivityDenormalized } from 'Closies/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  activity: getSelectedActivityDenormalized(state)
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Activity)

//@flow
import { connect } from 'react-redux'
import Mapp from 'Closies/app/components/Map'
import { getCheckIns } from 'Closies/app/reducers/selectors/Data'
import { checkIn, fetchCheckIns } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state: Object): Object => ({
  checkIns: getCheckIns(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({ doCheckIn: checkIn, fetchCheckIns }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Mapp)

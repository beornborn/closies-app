//@flow
import { connect } from 'react-redux'
import Settings from 'Closies/app/components/Settings'
import { bindActionCreators } from 'redux'
import { doLogout } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({doLogout}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

//@flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Root from 'Closies/app/components/Root'
import { getInitialized } from 'Closies/app/reducers/selectors/App'
import { doAuthenticate } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  initialized: getInitialized(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({doAuthenticate}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Root)

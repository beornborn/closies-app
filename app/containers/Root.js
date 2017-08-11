//@flow
import { connect } from 'react-redux'
import Root from 'Closies/app/components/Root'
import { getInitialized } from 'Closies/app/reducers/selectors/App'
import { doAuthenticate } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  initialized: getInitialized(state),
  nav: state.nav,
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  doAuthenticate: () => dispatch(doAuthenticate()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)

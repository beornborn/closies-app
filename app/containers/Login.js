//@flow
import { connect } from 'react-redux'
import Login from 'Closies/app/components/Login'
import { doLogin } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({ doLogin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

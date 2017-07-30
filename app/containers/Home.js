//@flow
import { connect } from 'react-redux'
import Home from 'Closies/app/components/Home'
import { getTest } from 'Closies/app/reducers/selectors/Ui'
import { doTest } from 'Closies/app/reducers/Ui'
import { doLogin } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state: Object): Object => ({
  test: getTest(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({ doTest, doLogin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

//@flow
import { connect } from 'react-redux'
import Home from 'Closies/app/components/Home'
import { getTest } from 'Closies/app/reducers/selectors/Ui'
import { doTest } from 'Closies/app/reducers/Ui'
import { bindActionCreators } from 'redux'

export const mapStateToProps = (state: Object): Object => ({
  test: getTest(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({ doTest }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

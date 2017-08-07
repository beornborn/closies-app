//@flow
import { connect } from 'react-redux'
import WithFooter from 'Closies/app/components/WithFooter'

const withFooter = (Component: Object) => {
  const mapStateToProps = (_state: Object): Object => ({
    Component,
  })

  return connect(mapStateToProps, null)(WithFooter)
}

export default withFooter

//@flow
import { connect } from 'react-redux'
import ViewProfile from 'Closies/app/components/profile/ViewProfile'
import { getSelectedUser } from 'Closies/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  user: getSelectedUser(state)
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)

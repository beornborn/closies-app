//@flow
import { connect } from 'react-redux'
import InviteButton from 'Closies/app/components/group_view/InviteButton'
import { getCanInviteUser } from 'Closies/app/reducers/selectors/Data'
import { getIsCurrentUserGroupOwner } from 'Closies/app/reducers/selectors/App'
import { createInvite } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  canInviteUser: getCanInviteUser(state),
  isCurrentUserGroupOwner: getIsCurrentUserGroupOwner(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  createInvite: () => dispatch(createInvite())
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteButton)

//@flow
import { connect } from 'react-redux'
import GroupViewToolbar from 'Closies/app/components/groups__group/GroupViewToolbar'
import { getCanInviteUser } from 'Closies/app/reducers/selectors/Data'
import { getIsCurrentUserGroupOwner, getSelectedGroup } from 'Closies/app/reducers/selectors/App'
import { createInvite, deleteGroup } from 'Closies/app/reducers/Saga'

export const mapStateToProps = (state: Object): Object => ({
  group: getSelectedGroup(state),
  canInviteUser: getCanInviteUser(state),
  isCurrentUserGroupOwner: getIsCurrentUserGroupOwner(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  createInvite: () => dispatch(createInvite()),
  deleteGroup: (id: number) => dispatch(deleteGroup(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupViewToolbar)

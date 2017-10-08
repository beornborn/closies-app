//@flow
import { connect } from 'react-redux'
import AddGroupButton from 'Closies/app/components/groups__group_list/AddGroupButton'
import { NavigationActions } from 'react-navigation'
import { getCanAddGroup } from 'Closies/app/reducers/selectors/Data'

export const mapStateToProps = (state: Object): Object => ({
  canAddGroup: getCanAddGroup(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToAddGroup: () => dispatch(NavigationActions.navigate({routeName: 'AddGroup'}))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupButton)

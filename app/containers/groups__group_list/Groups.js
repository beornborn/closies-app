//@flow
import { connect } from 'react-redux'
import Groups from 'Closies/app/components/groups__group_list/Groups'
import { getAllGroupsDenormalized } from 'Closies/app/reducers/selectors/Data'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (state: Object): Object => ({
  groups: getAllGroupsDenormalized(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToAddGroup: () => dispatch(NavigationActions.navigate({routeName: 'AddGroup'}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Groups)

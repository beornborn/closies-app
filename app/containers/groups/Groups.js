//@flow
import { connect } from 'react-redux'
import Groups from 'Closies/app/components/groups/Groups'
import { getGroupsDenormalized } from 'Closies/app/reducers/selectors/Data'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (state: Object): Object => ({
  groups: getGroupsDenormalized(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToAddGroup: () => dispatch(NavigationActions.navigate({routeName: 'AddGroup'}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Groups)

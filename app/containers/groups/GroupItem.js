//@flow
import { connect } from 'react-redux'
import GroupItem from 'Closies/app/components/groups/GroupItem'
import { setSelectedGroupId } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToGroupView: (id: number) => {
    dispatch(setSelectedGroupId(id))
    dispatch(NavigationActions.navigate({routeName: 'GroupView'}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem)


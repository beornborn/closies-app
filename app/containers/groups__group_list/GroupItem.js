//@flow
import { connect } from 'react-redux'
import GroupItem from 'Closies/app/components/groups__group_list/GroupItem'
import { setSelectedGroupId } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onPress: (group: Object) => {
    dispatch(setSelectedGroupId(group.id))
    dispatch(NavigationActions.navigate({routeName: 'GroupView', params: {title: group.name}}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem)


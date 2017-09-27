//@flow
import { connect } from 'react-redux'
import GroupView from 'Closies/app/components/group_view/GroupView'
import { getSelectedGroup } from 'Closies/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  group: getSelectedGroup(state)
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GroupView)

//@flow
import { connect } from 'react-redux'
import GroupView from 'Closies/app/components/group_view/GroupView'
import { getSelectedGroupDenormalized } from 'Closies/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  group: getSelectedGroupDenormalized(state)
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GroupView)

//@flow
import { connect } from 'react-redux'
import Groups from 'Closies/app/components/groups/Groups'
import { getGroupsValues } from 'Closies/app/reducers/selectors/Data'

export const mapStateToProps = (state: Object): Object => ({
  groups: getGroupsValues(state)
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Groups)

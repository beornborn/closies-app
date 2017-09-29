//@flow
import { connect } from 'react-redux'
import Groups from 'Closies/app/components/groups/Groups'
import { getGroupsDenormalized } from 'Closies/app/reducers/selectors/Data'

export const mapStateToProps = (state: Object): Object => ({
  groups: getGroupsDenormalized(state)
})

export const mapDispatchToProps = (_dispatch: Function): Object => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Groups)

//@flow
import { connect } from 'react-redux'
import EditProfileActions from 'Closies/app/components/activities__filter/FilterActions'
import { submit, isPristine } from 'redux-form'

export const mapStateToProps = (state: Object): Object => ({
  pristine: isPristine('area/filter')(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  // $FlowFixMe
  submit: () => dispatch(submit('area/filter'))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileActions)

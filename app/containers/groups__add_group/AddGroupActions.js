//@flow
import { connect } from 'react-redux'
import AddGroupActions from 'Closies/app/components/users__edit_profile/EditProfileActions'
import { submit, isValid } from 'redux-form'
import { form } from 'Closies/app/containers/groups__add_group/AddGroup'

export const mapStateToProps = (state: Object): Object => ({
  valid: isValid(form.form)(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  // $FlowFixMe
  submit: () => dispatch(submit(form.form))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupActions)

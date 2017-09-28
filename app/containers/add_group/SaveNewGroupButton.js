//@flow
import { connect } from 'react-redux'
import EditProfileSaveButton from 'Closies/app/components/profile/EditProfileSaveButton'
import { submit, isValid } from 'redux-form'
import { form } from 'Closies/app/containers/add_group/AddGroup'

export const mapStateToProps = (state: Object): Object => ({
  valid: isValid(form.form)(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  // $FlowFixMe
  submit: () => dispatch(submit(form.form))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileSaveButton)

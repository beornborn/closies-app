//@flow
import { connect } from 'react-redux'
import EditProfileSaveButton from 'Closies/app/components/profile/EditProfileSaveButton'
import { submit, isValid } from 'redux-form'

export const mapStateToProps = (state: Object): Object => ({
  valid: isValid('profile/edit')(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  // $FlowFixMe
  submit: () => dispatch(submit('profile/edit'))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileSaveButton)

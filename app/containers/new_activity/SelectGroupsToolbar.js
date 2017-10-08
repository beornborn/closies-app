//@flow
import { connect } from 'react-redux'
import SelectGroupsToolbar from 'Closies/app/components/new_activity/SelectGroupsToolbar'
import { form } from 'Closies/app/containers/new_activity/NewActivity'
import { isValid, isSubmitting, submit } from 'redux-form'

export const mapStateToProps = (state: Object): Object => {
  return {
    valid: isValid(form.form)(state),
    submitting: isSubmitting(form.form)(state),
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  // $FlowFixMe
  post: () => dispatch(submit(form.form))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectGroupsToolbar)

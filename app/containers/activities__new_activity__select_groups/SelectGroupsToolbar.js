//@flow
import { connect } from 'react-redux'
import SelectGroupsToolbar from 'Closies/app/components/activities__new_activity__select_groups/SelectGroupsToolbar'
import { form } from 'Closies/app/containers/activities__new_activity__content/NewActivity'
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

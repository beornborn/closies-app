//@flow
import { connect } from 'react-redux'
import NewComment from 'Closies/app/components/activities__activity/NewComment'
import { reduxForm, isValid } from 'redux-form'
import { createActivityComment } from 'Closies/app/reducers/Saga'

export const form = {
  form: 'area/activity/comment/new',
  validate: (values: Object) => {
    const errors = {}
    const bodyAbsent = !values.body || values.body.value.trim() === ''
    if (bodyAbsent) {
      errors.body = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (state: Object): Object => ({
  valid: isValid(form.form)(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(createActivityComment(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(NewComment))

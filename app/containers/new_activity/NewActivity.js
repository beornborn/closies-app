//@flow
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import NewActivity from 'Closies/app/components/new_activity/NewActivity'
import { fetchCurrentLocation, createActivity } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

export const form = {
  form: 'area/activity/new',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: (values: Object) => {
    const errors = {}
    const imageAbsent = !values.image || !values.image.uri
    const descriptionAbsent = !values.description || values.description.value.trim() === ''
    if (descriptionAbsent && imageAbsent) {
      errors.description = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (state: Object): Object => ({
  image: formValueSelector(form.form)(state, 'image'),
})

export const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    ...bindActionCreators({fetchCurrentLocation}, dispatch),
    onSubmit: (formData: Object) =>
      new Promise((resolve, reject) => {
        dispatch(createActivity(formData, resolve, reject))
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(NewActivity))

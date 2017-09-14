//@flow
import { connect } from 'react-redux'
import EditProfile from 'Closies/app/components/profile/EditProfile'
import { reduxForm } from 'redux-form'
import { updateProfile } from 'Closies/app/reducers/Saga'
import { getCurrentUser } from 'Closies/app/reducers/selectors/Data'

export const form = {
  form: 'profile/edit',
  validate: (values: Object) => {
    const errors = {}
    const fn = values.full_name
    const full_name = (fn && typeof fn === 'object') ? fn.value : fn

    if (!full_name || full_name.trim() === '') {
      errors.full_name = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (state: Object): Object => {
  const user = getCurrentUser(state)
  return {
    initialValues: {
      full_name: user.full_name,
      phone_number: user.phone_number,
    }
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(updateProfile(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(EditProfile))

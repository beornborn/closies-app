//@flow
import { connect } from 'react-redux'
import SelectGroups from 'Closies/app/components/new_activity/SelectGroups'
import { getGroupsDenormalized } from 'Closies/app/reducers/selectors/Data'
import { reduxForm } from 'redux-form'
import { createActivity } from 'Closies/app/reducers/Saga'
import { form as ParentForm } from 'Closies/app/containers/new_activity/NewActivity'

const form = {
  ...ParentForm,
  validate: (values: Object) => {
    const errors = {}
    if (!values.group_ids || values.group_ids.length === 0) {
      errors.group_ids = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (state: Object): Object => ({
  groups: getGroupsDenormalized(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(createActivity(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(SelectGroups))

//@flow
import { connect } from 'react-redux'
import SelectGroups from 'Closies/app/components/activities__new_activity__select_groups/SelectGroups'
import { getAllGroupsDenormalized } from 'Closies/app/reducers/selectors/Data'
import { reduxForm } from 'redux-form'
import { createActivity } from 'Closies/app/reducers/Saga'
import { form as ParentForm } from 'Closies/app/containers/activities__new_activity__content/NewActivity'

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
  groups: getAllGroupsDenormalized(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(createActivity(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(SelectGroups))

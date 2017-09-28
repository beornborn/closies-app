//@flow
import { connect } from 'react-redux'
import AddGroup from 'Closies/app/components/add_group/AddGroup'
import { reduxForm } from 'redux-form'
import { createGroup } from 'Closies/app/reducers/Saga'
import { getConfig, getGroupsCounts } from 'Closies/app/reducers/selectors/Data'
import _ from 'lodash'

export const form = {
  form: 'groups/new',
  enableReinitialize: true,
  validate: (values: Object) => {
    const errors = {}
    const nameAbsent = !values.name || values.name.value.trim() === ''
    if (nameAbsent) {
      errors.name = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (state: Object): Object => {
  const groupsCounts = getGroupsCounts(state)
  const config = getConfig(state)
  const size_type = _.keys(groupsCounts).find(st => groupsCounts[st] < config.st_counts[size_type])

  return {
    groupsCounts,
    config,
    initialValues: {
      size_type
    }
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(createGroup(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(AddGroup))

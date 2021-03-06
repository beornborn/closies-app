//@flow
import { connect } from 'react-redux'
import { Keyboard } from 'react-native'
import AddGroup from 'Closies/app/components/groups__add_group/AddGroup'
import { reduxForm } from 'redux-form'
import { createGroup } from 'Closies/app/reducers/Saga'
import { getConfig, getGroupsCounts } from 'Closies/app/reducers/selectors/Data'
import _ from 'lodash'
import { NavigationActions } from 'react-navigation'

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
  const size_type = _.keys(groupsCounts).find(st => groupsCounts[st] < config.size_type_counts[st])

  return {
    groupsCounts,
    config,
    initialValues: {
      size_type
    }
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToJoinGroup: () => dispatch(NavigationActions.navigate({routeName: 'JoinGroup'})),
  onSubmit: (formData: Object) => {
    Keyboard.dismiss()
    return new Promise((resolve, reject) => {
      dispatch(createGroup(formData, resolve, reject))
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(AddGroup))

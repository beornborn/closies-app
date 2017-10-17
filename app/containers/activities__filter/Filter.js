//@flow
import { connect } from 'react-redux'
import Filter from 'Closies/app/components/activities__filter/Filter'
import { getAllGroupsDenormalized, getAllUsersValues, getDateRange } from 'Closies/app/reducers/selectors/Data'
import { getActivitiesFilter } from 'Closies/app/reducers/selectors/App'
import { reduxForm, formValueSelector } from 'redux-form'
import { applyFilter } from 'Closies/app/reducers/Saga'

export const form = {
  form: 'area/filter',
  enableReinitialize: true,
}

export const mapStateToProps = (state: Object): Object => {
  const { startDate, endDate, groupIds, userIds } = getActivitiesFilter(state)
  const { startDate: initStartDate, endDate: initEndDate } = getDateRange(state)

  return {
    groups: getAllGroupsDenormalized(state),
    users: getAllUsersValues(state),
    startDate: formValueSelector(form.form)(state, 'startDate'),
    endDate: formValueSelector(form.form)(state, 'endDate'),
    initialValues: {
      startDate: startDate || initStartDate,
      endDate: endDate || initEndDate,
      groupIds,
      userIds,
    }
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(applyFilter(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(Filter))

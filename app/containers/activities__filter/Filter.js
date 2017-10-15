//@flow
import { connect } from 'react-redux'
import Filter from 'Closies/app/components/activities__filter/Filter'
import { getAllGroupsDenormalized } from 'Closies/app/reducers/selectors/Data'
import { reduxForm } from 'redux-form'
import { applyFilter } from 'Closies/app/reducers/Saga'

export const form = {
  form: 'area/filter',
  enableReinitialize: true,
}

export const mapStateToProps = (state: Object): Object => ({
  groups: getAllGroupsDenormalized(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  onSubmit: (formData: Object) =>
    new Promise((resolve, reject) => {
      dispatch(applyFilter(formData, resolve, reject))
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(Filter))

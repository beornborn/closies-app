//@flow
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import NewActivity from 'Closies/app/components/NewActivity'
import { getCurrentLocation } from 'Closies/app/reducers/selectors/App'
import { fetchCurrentLocation, createActivity } from 'Closies/app/reducers/Saga'
import { bindActionCreators } from 'redux'

const form = {
  form: 'area/activity/new',
  validate: values => {
    const errors = {}
    if (!values.description || values.description.value.trim() === '') {
      errors.description = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (state: Object): Object => ({
  location: getCurrentLocation(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => bindActionCreators({
  fetchCurrentLocation, createActivity
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(NewActivity))

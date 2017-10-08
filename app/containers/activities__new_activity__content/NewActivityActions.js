//@flow
import { connect } from 'react-redux'
import NewActivityActions from 'Closies/app/components/activities__new_activity__content/NewActivityActions'
import { form } from 'Closies/app/containers/activities__new_activity__content/NewActivity'
import { isValid } from 'redux-form'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (state: Object): Object => {
  return {
    valid: isValid(form.form)(state),
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => ({
  next: () => dispatch(NavigationActions.navigate({routeName: 'SelectGroups'}))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewActivityActions)

//@flow
import { connect } from 'react-redux'
import NavigationToolbar from 'Closies/app/components/new_activity/NavigationToolbar'
import { form } from 'Closies/app/containers/new_activity/NewActivity'
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationToolbar)

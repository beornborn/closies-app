//@flow
import { connect } from 'react-redux'
import { Keyboard } from 'react-native'
import JoinGroup from 'Closies/app/components/group_view/JoinGroup'
import { joinGroup } from 'Closies/app/reducers/Saga'
import { reduxForm } from 'redux-form'

export const form = {
  form: 'groups/join',
  validate: (values: Object) => {
    const errors = {}
    const tokenAbsent = !values.token || values.token.value.trim() === ''
    if (tokenAbsent) {
      errors.token = 'Required'
    }
    return errors
  }
}

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  joinGroup: (formData: Object) => {
    Keyboard.dismiss()
    return new Promise((resolve, reject) => {
      dispatch(joinGroup(formData, resolve, reject))
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(form)(JoinGroup))

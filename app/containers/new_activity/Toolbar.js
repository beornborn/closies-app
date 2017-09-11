//@flow
import { connect } from 'react-redux'
import Toolbar from 'Closies/app/components/new_activity/Toolbar'
import { form } from 'Closies/app/containers/new_activity/NewActivity'
import { change, isValid, isSubmitting } from 'redux-form'
// $FlowFixMe
import ImagePicker from 'react-native-image-picker'

export const mapStateToProps = (state: Object): Object => {
  return {
    valid: isValid(form.form)(state),
    submitting: isSubmitting(form.form)(state),
  }
}

export const mapDispatchToProps = (dispatch: Function): Object => {
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }

  const handler = (response) => {
    console.log('Response = ', response)

    if (response.didCancel) {
      console.log('User cancelled image picker')
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error)
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton)
    } else {
      dispatch(change(form.form, 'image', response))
    }
  }

  return {
    launchImageLibrary: () => ImagePicker.launchImageLibrary(options, handler),
    launchCamera: () => ImagePicker.launchCamera(options, handler),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)

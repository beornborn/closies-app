//@flow
import { connect } from 'react-redux'
import AttachedImage from 'Closies/app/components/new_activity/AttachedImage'
import { form } from 'Closies/app/containers/new_activity/NewActivity'
import { formValueSelector, change } from 'redux-form'

export const mapStateToProps = (state: Object): Object => ({
  image: formValueSelector(form.form)(state, 'image'),
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  // $FlowFixMe
  remove: () => dispatch(change(form.form, 'image', {}))
})

export default connect(mapStateToProps, mapDispatchToProps)(AttachedImage)

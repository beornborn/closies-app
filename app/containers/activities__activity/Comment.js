//@flow
import { connect } from 'react-redux'
import Comment from 'Closies/app/components/activities__activity/Comment'
import { setSelectedUserId } from 'Closies/app/reducers/App'
import { NavigationActions } from 'react-navigation'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  goToUser: (id: number | string) => {
    dispatch(setSelectedUserId(id))
    dispatch(NavigationActions.navigate({routeName: 'ViewProfile'}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

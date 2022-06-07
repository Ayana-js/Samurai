import React from 'react';
import { connect } from 'react-redux';
import { 
    followSuccess, 
    setCurrentPage, 
    toggleIsFetching, 
    unfollowSuccess,
    requestUsers,
    follow,
    unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, 
         getIsFetching, 
         getPagesSize, 
         getTotalPagesCount, 
         getUserFollowingProcess,
         getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
      this.props.requestUsers( this.props.pagesSize, this.props.currentPage)
      }

      onChangePage = (pageNumber) => {
        this.props.requestUsers(this.props.pagesSize, pageNumber)
      }
  
  render() {
    return <>
        {this.props.isFetching? <Preloader/>: null}
        < Users {...this.props} 
                {...this }/>
    </>
  }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        totalPagesCount: getTotalPagesCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        userFollowingProcess: getUserFollowingProcess(state)
    }
}

export default compose (
  connect(mapStateToProps, 
    { followSuccess, unfollowSuccess, setCurrentPage,
    toggleIsFetching, requestUsers, follow, unfollow }),
) (UsersContainer)





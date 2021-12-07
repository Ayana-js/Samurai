import React from 'react';
import { connect } from 'react-redux';
import { 
    followSuccess, 
    setCurrentPage, 
    toggleIsFetching, 
    unfollowSuccess,
    getUsers,
    follow,
    unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
      this.props.getUsers( this.props.pagesSize, this.props.currentPage)
      }

      onChangePage = (pageNumber) => {
        this.props.getUsers(this.props.pagesSize, pageNumber)
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
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalPagesCount: state.usersPage.totalPagesCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        userFollowingProcess: state.usersPage.userFollowingProcess
    }
}

const UsersContainer = connect(mapStateToProps, 
    {
        followSuccess,
        unfollowSuccess,
     
        setCurrentPage,

        toggleIsFetching,

        getUsers,
        follow,
        unfollow
    
    })(UsersContainerAPI)

export default UsersContainer;
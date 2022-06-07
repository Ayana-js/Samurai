import React from "react";
import Pagination from "../../common/Pagination/Pagination.jsx";
import User from "./User";

const Users = ({ totalPagesCount, pagesSize, currentPage, userFollowingProcess, follow, unfollow, onChangePage, users }) => {

  return <div>
    <Pagination
      totalPagesCount={totalPagesCount} 
      pagesSize={pagesSize} 
      currentPage={currentPage} 
      onChangePage={onChangePage} />
      <div>
    {
      users.map(u => <User 
        userFollowingProcess={userFollowingProcess} 
        follow={follow} 
        unfollow={unfollow} 
        user={u}
        key={u.id} />)
    }
    </div> 
  </div>
}

export default Users
export const getUsers = (state) => {
    return state.usersPage.users
}
export const getPagesSize = (state) => {
    return state.usersPage.pagesSize
}
export const getTotalPagesCount = (state) => {
    return state.usersPage.totalPagesCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getUserFollowingProcess = (state) => {
    return state.usersPage.userFollowingProcess
}
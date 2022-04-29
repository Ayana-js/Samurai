import React from "react";
import s from "./Pagination.module.css"

const Pagination = ({totalPagesCount, pagesSize, currentPage, onChangePage}) => {
    let pageCount = Math.ceil(totalPagesCount / pagesSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
    return <div className={s.pages}>
        { pages.map(p=> <span className={currentPage === p && s.selectedPage}
                       onClick={ () => onChangePage(p) }>{p}|</span>)}
      </div>
}

export default Pagination
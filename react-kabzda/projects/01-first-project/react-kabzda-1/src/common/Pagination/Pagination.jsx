import React, { useState } from "react";
import s from "./Pagination.module.css"
import cn from 'classnames'

const Pagination = ({ totalItemsCount, pagesSize, currentPage, onChangePage, portionSize = 10 }) => {
  let pageCount = Math.ceil(totalItemsCount / pagesSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pageCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return <div className={s.paginator}>
    {portionNumber > 1 && 
     <button onClick={() => {setPortionNumber(portionNumber - 1)}}> Prev </button>}
    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map(p => <span className={ cn ({
        [s.selectedPage]: currentPage === p
      }, s.pageNumber)}
    key={p}
    onClick={(e) => onChangePage(p)}>
    {p} </span>
      )}
      {portionCount > portionNumber && 
      <button onClick={() => {setPortionNumber(portionNumber + 1)}}> Next </button> }
      </div>
}

export default Pagination
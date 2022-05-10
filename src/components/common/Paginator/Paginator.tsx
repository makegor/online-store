import React, { useState } from 'react'

import styles from './Paginator.module.css'
import cn from 'classnames'
import next from '../../../assecs/images/Paginator/icons-next.png'
import prev from '../../../assecs/images/Paginator/icons-prev.png'

interface PagiatorProps {
    totalCount: number
    pageSize: number
    currentPage?: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<PagiatorProps> = ({ totalCount, pageSize, currentPage = 1, onPageChanged, portionSize = 2 }) => {

    let pagesCount = Math.ceil(totalCount / pageSize)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.paginator} >
        {portionNumber > 1 &&
            <button className={styles.prev} onClick={() => { setPortionNumber(portionNumber - 1) }}><img alt="" src={prev} /></button>}
        <div className={styles.pageNumbers}>
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                        key={p}
                        onClick={(e) => { onPageChanged(p) }}>{p}</span>
                })}
        </div>
        {portionCount > portionNumber &&
            <button className={styles.next} onClick={() => { setPortionNumber(portionNumber + 1) }}><img alt="" src={next} /></button>}
    </div>
}

export default Paginator
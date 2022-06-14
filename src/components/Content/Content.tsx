import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { setContentThunk, addProduct, deleteProduct, plusProduct, minusProduct } from "../../redux/content-reducer"
import { getContent, getIsFetching, getFollowingInProgress, getPageSize, getTotalCount, getCurrentPage } from "../../redux/content-selectors"
import ContentElement from "./ContentElement"
import Paginator from '../common/Paginator/Paginator'
import ErrorPage from '../common/ErrorPage/ErrorPage'
import styles from "./Content.module.scss"
import Preloader from "../common/preloader/preloader"
import mainNewColl from "../../assecs/images/Content/bgMain.jpg"

const Content = () => {

    const isFetching = useSelector(getIsFetching)
    const content = useSelector(getContent)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const totalCount = useSelector(getTotalCount)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    const sexId = useParams().id

    useEffect(() => {
        dispatch(setContentThunk(sexId, 1, pageSize))
        window.scrollTo(0, 0)
    }, [sexId])

    const onPageChanged = (currentPage: number) => {
        dispatch(setContentThunk(sexId, currentPage, pageSize))
        window.scrollTo(0, 0)
    }

    let ElementContent = content.map(p => <ContentElement key={p.id}
        id={p.id}
        title={p.title}
        summ={p.summ}
        added={p.added}
        price={p.price}
        photo={p.photo}
        addProduct={(ID) => dispatch(addProduct(ID))}
        deleteProduct={(ID) => dispatch(deleteProduct(ID))}
        minusProduct={(ID) => dispatch(minusProduct(ID))}
        plusProduct={(ID) => dispatch(plusProduct(ID))}
        followingInProgress={followingInProgress} />)

    return (
        <div>
            {isFetching ? <Preloader /> :
                <div> {totalCount !== 0
                    ? <div> {sexId === undefined && currentPage === 1 ? <div className={styles.mainPage}>
                        <div className={styles.mainPage__img}>
                            <img src={mainNewColl} alt="Main img new collection" />
                        </div>
                        <div className={styles.mainPage__item}>
                            <button>
                                <Link to="/woman">new collection</Link>
                            </button>
                        </div>
                        <div className={styles.block__element}>
                            {ElementContent}
                        </div>
                    </div>
                        : <div className={styles.block__element}>
                            {ElementContent}
                        </div>
                    }
                    </div>
                    : <ErrorPage />
                }
                </div>
            }
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalCount={totalCount} pageSize={pageSize} />
        </div>
    )
}

export default Content
import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct } from "../../../redux/content-reducer"
import { getFollowingInProgress } from "../../../redux/content-selectors"

import styles from "../Basket.module.scss"

interface BasketElement {
    id: string
    title: string
    photo: string
    price: number
    summ: number
}

let BasketElement: React.FC<BasketElement> = React.memo(({ id, title, photo, price, summ }) => {

    const dispatch = useDispatch()
    const followingInProgress = useSelector(getFollowingInProgress)

    return (
        <div>
            <div className={styles.basket__product}>
                <div className={styles.description}>
                <Link to={'/product/' + id}>{title}</Link></div>
                <div className={styles.photo__product}>
                    <img alt="" src={photo} />
                </div>
                <button className={styles.btn__deleteProduct} disabled={followingInProgress.some(Id => Id === id)} onClick={() => { dispatch(deleteProduct(id)) }}>Delete ⊗</button>
                <div className={styles.price__product}>
                    <span>{summ}^ {price} $</span>
                    <div className={styles.price__productTotal}>
                        <div>{price * summ} $</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default BasketElement
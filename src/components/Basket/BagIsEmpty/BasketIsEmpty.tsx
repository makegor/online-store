import React from 'react'
import { Link } from "react-router-dom"

import styles from "../Basket.module.scss"
import list_empty from "../../../assecs/images/Basket/list-is-empty.png"

interface BasketIsEmpty{
    isAuth: boolean
}

const BasketIsEmpty: React.FC<BasketIsEmpty> = React.memo(({isAuth}) => {
    return (
        <div className={styles.basket__none}>
            <h1 className={styles.basket__titleNone}>Your bag is empty</h1>
            <img alt="" src={list_empty} />
            {!isAuth
                ? <Link to={'/login/signin'} className={styles.basket__signIn}>SIGN IN</Link>
                : <div></div>
            }
        </div>
    )
})

export default BasketIsEmpty